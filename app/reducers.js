import { combineReducers } from 'redux'

// Action types
import { SET_DISPLAY, SET_PREVIEW, SET_PROGRESS, SET_POSITION, SET_PLAY_MODE, SET_SOURCE, SET_SOURCES, SET_STREAM, RECORD_VIDEO, UPLOAD_VIDEO, PLAY_VIDEO, SET_RANGE, SET_RENDER, START_RENDER } from './actions'

// Action constants
import { playModes, renderModes, displayModes } from './actions'


/*
	Reducers
*/ 
const disp = displayModes.SPLASH
const pl   = playModes.PLAY

const display   = (state = disp,    action) => action.type !== SET_DISPLAY   ? state : action.display  
const preview   = (state = '',      action) => action.type !== SET_PREVIEW   ? state : action.preview  
const progress  = (state = 0.0,     action) => action.type !== SET_PROGRESS  ? state : action.progress  
const position  = (state = {pos:0}, action) => action.type !== SET_POSITION  ? state : action
const source    = (state = 0,       action) => action.type !== SET_SOURCE    ? state : action.source  	
const sources   = (state = [],      action) => action.type !== SET_SOURCES   ? state : action.sources 	
const stream    = (state = '',      action) => action.type !== SET_STREAM    ? state : action.stream  	
const recording = (state = false,   action) => action.type !== RECORD_VIDEO  ? state : action.recording
const play      = (state = pl,      action) => action.type !== SET_PLAY_MODE ? state : action.mode

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
	progress,
	recording,
	display,
	position,
	play,
	// renderMode,
	// renderRange
})

export default app