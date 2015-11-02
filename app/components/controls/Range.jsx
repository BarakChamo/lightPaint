import 'styles/range.scss'

import React		from 'react'
import ReactDOM from 'react-dom'

export default class Range extends React.Component {
	constructor() {
		super()

		this.state = {
			click: false
		}
	}

	shouldComponentUpdate(nextProps) {
		if (!this.state.click) this.elm.value = nextProps.position
		return false
	}

	componentDidMount() {
		this.elm = ReactDOM.findDOMNode(this).getElementsByTagName('input')[0]
	}

	seek(e) {
		const p = parseFloat(e.target.value)

		if(isNaN(p)) return

		this.props.onChange(e.target.value)
	}

	click(isDown){
		this.setState({click: isDown})
		this.props.onSeek(isDown)
	}

	render() {
		return (
			<div className='control-range'>
				<input type='range' min={0.0} max={1000.0} step={0.1}
							 defaultValue={this.props.position}
							 onChange={ e => this.seek(e) }
							 onMouseDown={ e => this.click(true) }
							 onMouseUp={ e => this.click(false) } 
				/>
			</div>
		)
	}
}