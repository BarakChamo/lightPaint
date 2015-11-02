import { GIF } from 'gif.js/dist/gif'
import Emitter from 'eventemitter3'

// Shim getUserMedia
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
window.URL = (URL || webkitURL)

// Create upload input
const input = document.createElement('input')
input.type = 'file'
input.accept = 'video/*'

const FRAME_RATE = 1000 / 25

class MediaManager extends Emitter {
	constructor() {
		super()

		// Create a canvas context
		this.ctx = document.createElement('CANVAS').getContext('2d')

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
			// Create new GIF capture
			this.capture = new GIF({
				workers: 8,
				quality: 10,
				width:   this.video.videoWidth,
				height:  this.video.videoHeight
			})

			// Update canvas dimensions
			this.ctx.canvas.width  = this.video.videoWidth
			this.ctx.canvas.height = this.video.videoHeight

			// Assign new capture handler
			this.capture.on('finished', blob => {
				this.preview = blob
				console.dir(this.capture.frames)
				// Emit a new preview event to update display
				this.emit('preview', URL.createObjectURL(blob))
			})

			// Start adding frames at playback framerate
			this.interval = setInterval(( ) => {
				// Draw video to canvas
    		this.ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

    		// Add frame to capture
	      this.capture.addFrame(this.ctx, {
	        copy: true,
	        delay: FRAME_RATE
	      })
		    
			}, FRAME_RATE)

		} else {
			// Stop adding frames
			clearInterval(this.interval)

			// Render capture
			this.capture.render()
		}
	}

	capture() {

	}

	upload() {
		input.onchange = value => this.handleUpload(input.files[0])
		input.click()
	}

	handleUpload(file) {
		this.file = file
		this.emit('stream', file.path)//URL.createObjectURL(file))
	}
}

// Export a singleton instance of the media manager
export default new MediaManager