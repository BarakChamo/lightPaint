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
import { setSources, setStream, setDisplay } from './actions'

// Action Constants
import { displayModes } from './actions'

// Initialize redux store
const store = createStore(app)

/*
	Bind media manager events
*/

mediaManager.on( 'sources', sources => {
	store.dispatch(setSources(sources))
})

mediaManager.on( 'stream', (stream, live) => {
	// Set new stream
	store.dispatch(setStream(stream))

	// Check if new stream is live feed stream or recording
	store.dispatch(setDisplay( live ? displayModes.RECORD : displayModes.PLAYBACK ))
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