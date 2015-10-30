import React		from 'react'
import ReactDOM from 'react-dom'

export default class Media extends React.Component {
	shouldComponentUpdate(nextProps) {
		// Update video source
		if (this.props.stream !== nextProps.stream) this.vid.src = nextProps.stream
		
		// Update capture preview
		if(this.props.preview !== nextProps.preview) this.preview.src = nextProps.preview

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

		this.props.onMount(this.vid)
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