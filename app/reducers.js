import { combineReducers } from 'redux'

// Action types
import { SET_DISPLAY, SET_PREVIEW, SET_SOURCE, SET_SOURCES, SET_STREAM, RECORD_VIDEO, UPLOAD_VIDEO, PLAY_VIDEO, SET_RANGE, SET_RENDER, START_RENDER } from './actions'

// Action constants
import { playModes, renderModes, displayModes } from './actions'


/*
	Reducers
*/ 
const disp = displayModes.SPLASH

const display   = (state = disp,  action) => action.type === SET_DISPLAY  ? action.display   : state
const preview   = (state = '',    action) => action.type === SET_PREVIEW  ? action.preview   : state
const source    = (state = 0,     action) => action.type === SET_SOURCE   ? action.source  	 : state
const sources   = (state = [],    action) => action.type === SET_SOURCES  ? action.sources 	 : state
const stream    = (state = '',    action) => action.type === SET_STREAM   ? action.stream  	 : state
const recording = (state = false, action) => action.type === RECORD_VIDEO ? action.recording : state

// function renderMode(state = renderModes.LIGHTER, action) {
// 	if ( action.type !== SET_RENDER ) return state
// 	return action.mode
// }

// function renderRange(state = renderRange, action) {
// 	if ( action.type !== SET_RANGE ) return state
// 	// return action...
// }


/*
	Combine reducers
*/ 

const app = combineReducers({
	source,
	sources,
	stream,
	preview,
	recording,
	display
	// playMode,
	// renderMode,
	// renderRange
})

export default app