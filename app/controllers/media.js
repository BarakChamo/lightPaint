import { GIF } from 'gif.js/dist/gif'
import Emitter from 'eventemitter3'
import capture from './capture'

// Shim getUserMedia
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
window.URL = (URL || webkitURL)

// Create upload input
const input = document.createElement('input')
input.type = 'file'
input.accept = 'video/*'

const FRAME_RATE = 25,
			QUALITY    = 0.01

class MediaManager extends Emitter {
	constructor() {
		super()

		// Create a canvas context
		this.ctx  = document.createElement('CANVAS').getContext('2d')
		this.rctx = document.createElement('CANVAS').getContext('2d')

		// Video capture settings
		this.constraints = {
			audio: false,
			video: {
				optional: [
					{sourceId: null},
					{minWidth: 320},
					{minWidth: 640},
					{minWidth: 1024},
					{minWidth: 1280},
					{minWidth: 1920},
					{minWidth: 2560},
					{minWidth: 9999}
				]
			}
		}

		// Get available video sources
		this.sources = []

		// Captured frames
		this.frames = null
	}

	// Get available video sources
	getSources() {
		return new Promise((resolve, reject) => {
			// Request all media streaming sources
			MediaStreamTrack.getSources(sources => {

				// Filter video source only
				this.sources = sources.filter((source) => source.kind === 'video')

				// Map labels for display
				this.sourcesMap = this.sources.map(source => source.label)

				// Trigger `sources` event to update source list outside
				this.emit('sources', this.sourcesMap)

				// Resolve the promise with a list of video sources
				resolve(this.sources)
			})
		})
	}

	setElement(video) {
		this.video = video
	}

	getSource() {

	}

	// Get available video stream
	getStream() {
		return new Promise((resolve, reject) => {
			if (this.stream) {
				this.emit('stream', URL.createObjectURL(this.stream), true)
				return resolve(URL.createObjectURL(this.stream))
			}

			this.getSources()
					.then(sources => {
						// TEMP: needs to match source selection, not first available
						this.constraints.video.optional[0].sourceId = this.sources[0]

						navigator.getUserMedia(this.constraints,
							stream => {
								this.stream = stream
								this.streamUrl = URL.createObjectURL(this.stream)

								// Resolve promise
								resolve( this.streamUrl )

								// Emit a new streaming event with new source URL
								this.emit('stream', this.streamUrl, true)
							},
							error => reject( 'bummer...' )
						)
					})
					.catch( e => reject(e) )
		})
	}

	setSource() {

	}

	record(rec) {
		// `rec` is a boolean for start/stop

		if (rec) {
			// Clear the frame capture
			this.frames = []

			// Update canvas dimensions
			this.ctx.canvas.width   = this.video.videoWidth
			this.rctx.canvas.width  = this.video.videoWidth
			this.ctx.canvas.height  = this.video.videoHeight
			this.rctx.canvas.height = this.video.videoHeight

			this.interval = setInterval((ts) => {
				// Draw video to canvas
				this.ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

				// Capture a frame
				this.frames.push( this.ctx.getImageData(0, 0, this.video.videoWidth, this.video.videoHeight) )
			}, FRAME_RATE)

		} else {
			// Stop adding frames
			clearInterval(this.interval)

			// Render from image sequence and emit a new stream
			capture(this.frames, this.ctx, FRAME_RATE, (done, data) => {
				done ? this.emit('stream', URL.createObjectURL(data) ) : this.emit('progress', data)
			})
		}
	}

	upload() {
		input.onchange = value => this.handleUpload(input.files[0])
		input.click()
	}

	handleUpload(file) {
		this.frames = undefined
		this.file = file
		console.log(file)
		this.emit('stream', file.path)
	}

	render() {
		// Update canvas dimensions
		this.ctx.canvas.width   = this.video.videoWidth
		this.rctx.canvas.width  = this.video.videoWidth
		this.ctx.canvas.height  = this.video.videoHeight
		this.rctx.canvas.height = this.video.videoHeight

		// Prep canvas for a clean render
		this.rctx.clearRect(0, 0, this.rctx.canvas.width, this.rctx.canvas.height)
		this.rctx.rect(0, 0, this.rctx.canvas.width, this.rctx.canvas.height)
		this.rctx.fillStyle='black'
		this.rctx.fill()
		this.ctx.globalCompositeOperation = 'lighten'

		// Render frame capture
		if (this.frames && frames.length) {
			this.frames.forEach( (frame, i) => {
				console.log(i, this.frames.length)
				this.renderFrame(frame)
			})
		} 
		
		// Render video stream
		else {
			this.video.pause()
			this.video.playbackRate = 0.5
			this.video.currentTime = 0
			this.video.loop = false

			let fn = () => {
				if (this.video.paused || this.video.ended) return this.finishRender()
				this.ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight)
				this.renderFrame( this.ctx.getImageData(0, 0, this.video.videoWidth, this.video.videoHeight) )
				requestAnimationFrame(fn)
			}

			// Assign onPlay handler
			this.video.onplay = fn

			// Start capturing
			this.video.play()
		}
	}

	renderFrame(frame) {
		this.rctx.putImageData(frame, 0, 0, 0, 0, this.video.videoWidth, this.video.videoHeight)
	}

	finishRender() {
		// Unassign onplay handler
		this.ctx.globalCompositeOperation = 'source-over'
		this.video.onplay = undefined
		this.video.loop = true
		this.video.playbackRate = 1
		this.emit('preview', this.rctx.canvas.toDataURL())
	}
}

// Export a singleton instance of the media manager
export default new MediaManager