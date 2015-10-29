/*
	action types
*/

// App display management
export const SET_DISPLAY   = 'SET_DISPLAY'

// Capture and transport actions
export const SET_SOURCE   = 'SET_SOURCE'
export const SET_SOURCES  = 'SET_SOURCES'
export const SET_STREAM   = 'SET_STREAM'

export const RECORD_VIDEO = 'RECORD_VIDEO'
export const UPLOAD_VIDEO = 'UPLOAD_VIDEO'
export const PLAY_VIDEO   = 'PLAY_VIDEO'

// Render actions
export const SET_RANGE    = 'SET_RANGE'
export const SET_RENDER   = 'SET_RENDER'
export const START_RENDER = 'START_RENDER'

/*
	Action constants...
*/ 

export const displayModes = {
	RECORD:   'RECORD',
	PLAYBACK: 'PLAYBACK',
	RENDER:   'RENDER'
}

export const playModes = {
  PLAY:  'PLAY',
  PAUSE: 'PAUSE',
  STOP:  'STOP'
}

export const renderModes = {
	LIGHTER: 'LIGHTER'
}

export const renderRange = {
	FROM: 0,
	TO: 	1
}


/*
	action creators
*/

// App display management
export const setDisplay = display => ({ type: SET_DISPLAY,  display })

// Capture source management actions
export const setSource  = source  => ({ type: SET_SOURCE,  source  })
export const setSources = sources => ({ type: SET_SOURCES, sources })
export const setStream  = stream  => ({ type: SET_STREAM,  stream  })


// Capture and transport action creators
export const recordVideo = recording => ({ type: RECORD_VIDEO, recording })
export const uploadVideo = video 		 => ({ type: UPLOAD_VIDEO, video 		 })
export const playVideo   = mode  		 => ({ type: PLAY_VIDEO,   mode  		 })

// Render action creators
export const setRenderRange = (mode, value) => ({ type: SET_RANGE,  mode, value })
export const setRenderMode  = (mode) 				=> ({ type: SET_RENDER, mode })
export const render         = ()            => ({ type: START_RENDER })