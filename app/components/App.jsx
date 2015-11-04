import React			 from 'react'
import ReactDOM 	 from 'react-dom'
import { connect } from 'react-redux'

// Actions
import { setDisplay, setSource, recordVideo, setPosition, setPlayMode } from '../actions'

// Action constants
import { displayModes, positionSources, playModes } from '../actions'

// Components
import Media from './Media'
import Dropdown  from './controls/Dropdown'
import Range     from './controls/Range'

// Controllers
import mediaManager from '../controllers/media'

class App extends React.Component {
	record(recording) {
		// Start/Stop recording in media manager
		mediaManager.record(!recording)
		this.props.dispatch(recordVideo(!this.props.recording))
	}

	retry() {
		this.props.dispatch( setDisplay(displayModes.RECORD) )
		mediaManager.getStream()
	}

	renderImage() {
		this.props.dispatch( setDisplay(displayModes.PROGRESS) )
		mediaManager.render()
	}

	render() {
		let top, bottom
		const { dispatch, visibleTodos, visibilityFilter } = this.props

		switch(this.props.display) {
			case displayModes.SPLASH:
				bottom = (
					<div className='splash cover'>
						<div className='splash-inner'>
							LightPaint v1.0
						</div>
					</div>
				)

				break;

			case displayModes.RECORD:
				top = (
					<Dropdown
						options= { this.props.sources }
						selected={ this.props.source }
						onSelect={ i => dispatch(setSource(i)) }
					/>
				)

				bottom = (
					<div className='center full-width'>
						<div className='btn-group'>
							<button type='button' className={`btn btn-sm btn-${ this.props.recording ? 'danger' : 'secondary' }-outline`} onClick={ e => this.record(this.props.recording) }>Record</button>
							<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => mediaManager.upload() }>Upload</button>
						</div>
					</div>
				)

				break;

			case displayModes.PLAYBACK:
				top = (
					<div className='btn-group'>
						<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => this.retry() }>BACK</button>
					</div>
				)

				bottom = (
					<div className='center full-width'>
						<Range className='control-range full-width' 
									 position={ this.props.position.pos }
									 onChange={ position => dispatch(setPosition( position, true ) ) }
									 onSeek={ seeking => dispatch(setPlayMode( seeking ? playModes.PAUSE : playModes.PLAY )) } />
						
						<div className='btn-group center'>
							<button type='button' className={`btn btn-sm btn-${ this.props.recording ? 'danger' : 'secondary' }-outline`} onClick={ e => this.renderImage() }>RENDER</button>
						</div>
					</div>
				)

				break;

			case displayModes.RENDER:
				bottom = (
					<div className='btn-group center'>
						<button type='button' className={`btn btn-sm btn-${ this.props.recording ? 'danger' : 'secondary' }-outline`} onClick={ e => this.record(this.props.recording) }>RECORD</button>
						<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => mediaManager.upload() }>UPLOAD</button>
					</div>
				)

				break;

			case displayModes.PROGRESS:
				bottom = (
					<div className='splash'>
						<div className='splash-inner'>
							<progress className='progress progress-info' value={ String(Math.round(this.props.progress * 100)) } max='100'>25%</progress>
						</div>
					</div>
				)

				break;

			case displayModes.PREVIEW:
				top = (
					<div className='btn-group'>
						<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => this.retry() }>BACK</button>
					</div>
				)

				bottom = (
					<div className='btn-group center'>
						<a type='button' className='btn btn-sm btn-secondary-outline' href={ this.props.preview } download>SAVE</a>
					</div>
				)

				break;
		}

		// Return template
		return (
			<div className='app flicker scanlines'>
				<Media 
					position= { this.props.position } 
					stream=   { this.props.stream }
					play=     { this.props.play === playModes.PLAY }
					preview=  { this.props.preview }
					playback= { this.props.display === displayModes.PLAYBACK }
					onMount=  { video => mediaManager.setElement(video) }
					onUpdate= { pos => dispatch(setPosition(pos, positionSources.MEDIA)) }
				/>

				<div className='controls container-fluid'>
					<div className='source'>
						{ top }
					</div>

					<div className='transport'>
						{ bottom }
					</div>
				</div>
			</div>
		)
	}
}

// Should probably select from the state...
function select(state) { return state }

export default connect(select)(App)