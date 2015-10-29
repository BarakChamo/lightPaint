import 'styles/style.scss'

import Recorder from 'recordrtc'

// Create video tag and append it to the DOM
// const video    = document.body.appendChild(document.createElement('VIDEO'))

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia

// Initialize a streaming source
function initSource(sources, target) {
	// if (!sources.length) {
	// 	console.log('NO VIDEO SOURCES AVAILABLE')
	// }

	// TEMP:
	// Initialize first source
	// const source = sources[0]

	// const constraints = {
	// 	audio: false,
	// 	video: {
	// 		optional: [
	// 			{sourceId: source},
	// 			{minWidth: 320},
	// 			{minWidth: 640},
	// 			{minWidth: 1024},
	// 			{minWidth: 1280},
	// 			{minWidth: 1920},
	// 			{minWidth: 2560},
	// 			{minWidth: 9999}
	// 		]
	// 	}
	// }

	// // Make sure video is auto-playing in a loop
	// target.setAttribute('autoplay', true)
	// target.setAttribute('loop', true)

	navigator.getUserMedia(constraints, 
		// stream => (target.src = (webkitURL || URL).createObjectURL(stream)), 
		stream => record(stream, target), 
		error => console.warn(error)
	)
}

function record(stream, target) {
	// Start recording when the video starts
	target.onplay = function() {
		target.onplay = undefined

		// Initialize recorder
		const recorder = new Recorder(stream, {
			type: 'video', 
			quality: 1,
			numberOfAudioChannels: 1,
			video: {
				width: target.videoWidth,
				height:target.videoHeight
			},
			canvas: {
				width: target.videoWidth,
				height:target.videoHeight
			}
		})
		
		recorder.setRecordingDuration(3000)
				.onRecordingStopped(url => (target.src = url))

		recorder.startRecording()
	}

	// Show live preview (initializes video)
	target.src = (webkitURL || URL).createObjectURL(stream)
}

// Get all connected media sources
function getSources(fn) {

	// Request all media streaming sources
	MediaStreamTrack.getSources(sources => {
		// Call the callback with the filtered list
		fn(
			// Filter video source only
			sources.reduce(
				// Return video sources
				(s, source) => source.kind === 'video' ? s.concat(source) : s, 
			[])
		)
	})
}


getSources(s => initSource(s, video))