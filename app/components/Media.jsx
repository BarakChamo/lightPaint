import React		from 'react'
import ReactDOM from 'react-dom'

export default class Media extends React.Component {
	shouldComponentUpdate(nextProps) {
		this.setStream(nextProps.stream)
		return false
	}

	componentDidMount() {
		const elm = ReactDOM.findDOMNode(this)

		// Get elements
		this.vid = elm.getElementsByTagName('video')[0]
		this.img = elm.getElementsByTagName('img')[0]

		this.props.onMount(this.vid)
	}

	setStream(streamUrl) {
		this.vid.src = streamUrl
	}

	render() {
		return (
			<div className="media-preview">
				<video className="media-preview-video" autoPlay loop/>
				<img 	 className="media-preview-image"/>
			</div>
		);
	}
}