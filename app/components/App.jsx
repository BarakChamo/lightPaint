import React			 from 'react'
import ReactDOM 	 from 'react-dom'
import { connect } from 'react-redux'

// Actions
import { setSource, recordVideo } from '../actions'

// Components
import Media from './Media'
import Dropdown  from './controls/Dropdown'

// Controllers
import mediaManager from '../controllers/media'

// Action constants
import { displayModes } from '../actions'

class App extends React.Component {
	record(recording) {
		// Start/Stop recording in media manager
		mediaManager.record(!recording)
		this.props.dispatch(recordVideo(!this.props.recording))
	}

	render() {
		let controls
		const { dispatch, visibleTodos, visibilityFilter } = this.props

		switch(this.props.display) {
			case displayModes.SPLASH:
				controls = (
					<div className='splash'>
						<div className='splash-inner'>
							LightPaint v1.0
						</div>
					</div>
				)

				break;

			case displayModes.RECORD:
				controls = (
					<div className='btn-group center'>
						<button type='button' className={`btn btn-sm btn-${ this.props.recording ? 'danger' : 'secondary' }-outline`} onClick={ e => this.record(this.props.recording) }>Record</button>
						<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => mediaManager.upload() }>Upload</button>
					</div>
				)

				break;

			case displayModes.PLAYBACK:
				controls = (
					<div className='btn-group center'>
						<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => mediaManager.upload() }>&lt;&lt;</button>
						<button type='button' className={`btn btn-sm btn-${ this.props.recording ? 'danger' : 'secondary' }-outline`} onClick={ e => this.record(this.props.recording) }>RECORD</button>
						<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => mediaManager.upload() }>&gt;&gt;</button>
					</div>
				)

				break;

			case displayModes.RENDER:
				controls = (
					<div className='btn-group center'>
						<button type='button' className={`btn btn-sm btn-${ this.props.recording ? 'danger' : 'secondary' }-outline`} onClick={ e => this.record(this.props.recording) }>RECORD</button>
						<button type='button' className='btn btn-sm btn-secondary-outline' onClick={ e => mediaManager.upload() }>UPLOAD</button>
					</div>
				)

				break;
		}

		// Return template
		return (
			<div className='app flicker scanlines'>
				<Media 
					stream ={ this.props.stream }
					preview={ this.props.preview }
					onMount={ video => mediaManager.setElement(video) }
				/>

				<div className='controls container-fluid'>
					<div className='source'>
							<Dropdown
								options= { this.props.sources }
								selected={ this.props.source }
								onSelect={ i => dispatch(setSource(i)) }
							/>
					</div>

					<div className='transport'>
						{ controls }
					</div>
				</div>
			</div>
		)
	}
}

// Should probably select from the state...
function select(state) { return state }

export default connect(select)(App)