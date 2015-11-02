import React		from 'react'
import ReactDOM from 'react-dom'

export default class Media extends React.Component {
	shouldComponentUpdate(nextProps) {
		// Update video source
		if (this.props.stream !== nextProps.stream) this.vid.src = nextProps.stream
		
		// Update capture preview
		if(this.props.preview !== nextProps.preview) this.preview.src = nextProps.preview

		// Update current video position
		if (this.props.position.src) this.vid.currentTime = ( (this.props.position.pos / 1000) * this.vid.duration )

		if (this.props.play !== nextProps.play) nextProps.play ? this.vid.play() : this.vid.pause()

		// Update render
		// TODO!

		return false
	}

	componentDidMount() {
		const elm = ReactDOM.findDOMNode(this)

		// Get elements
		this.vid 		 = elm.getElementsByTagName('video')[0]
		this.preview = elm.getElementsByTagName('img')[0]
		this.render  = elm.getElementsByTagName('img')[1]

		// Assign the video element to the media manager
		// Ugly, I know...
		this.props.onMount(this.vid)

		// Handle time update events (the video is moving)
		this.vid.ontimeupdate = e => this.timeUpdate(e)
	}

	timeUpdate(e){
		if (this.props.playback && this.props.play) this.props.onUpdate( (1000.0 / this.vid.duration) * this.vid.currentTime )
	}

	render() {
		return (
			<div className="media-preview">
				<video className="media-preview-video" autoPlay loop/>
				<img 	 className="media-preview-capture"/>
				<img 	 className="media-preview-image"/>
			</div>
		);
	}
}