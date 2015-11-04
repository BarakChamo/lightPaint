import 'styles/style.scss'

// Dependencies
import React 					 from 'react'
import ReactDOM 			 from 'react-dom'
import { createStore } from 'redux'
import { Provider } 	 from 'react-redux'

// Reduced State
import app from './reducers'

// Components
import App from './components/App'

// Controllers
import mediaManager from './controllers/media'

// Actions
import { setSources, setStream, setDisplay, setPreview, setProgress } from './actions'

// Action Constants
import { displayModes } from './actions'

// Initialize redux store
const store = createStore(app)

/*
	Bind media manager events
*/

// New video sources
mediaManager.on('sources', sources => {
	store.dispatch(setSources(sources))
})

// New video streams
mediaManager.on('stream', (stream, live) => {
	// Set new stream
	store.dispatch(setStream(stream))

	// Check if new stream is live feed stream or recording
	store.dispatch(setDisplay( live ? displayModes.RECORD : displayModes.PLAYBACK ))
})

// New video streams
mediaManager.on('progress', progress => {
	store.dispatch(setDisplay( displayModes.PROGRESS ))
	store.dispatch(setProgress( progress ))
})

// New capture preview
mediaManager.on('preview', (previewUrl) => {
	console.log('preview', previewUrl)
	// Update the preview URL
	store.dispatch(setPreview(previewUrl))

	// Set the display to playback preview mode
	store.dispatch(setDisplay(displayModes.PLAYBACK))
})


/*
	Start media capture
*/ 

// Get user media, or ask for permissions
mediaManager.getStream()


/*
	Render base
*/

ReactDOM.render(
	 <Provider store={ store }>
    <App />
  </Provider>,
	document.getElementById('container')
)