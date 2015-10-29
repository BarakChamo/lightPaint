import React		from 'react'
import ReactDOM from 'react-dom'

export default class List extends React.Component {
	constructor() {
		super()

		this.state = {
			open: false
		}
	}

	open(e) {
		this.setState({open: !this.state.open})
	}

	select(i) {
		setTimeout( ( ) => this.props.onSelect(i, this.props.options[i]) )
	}

	render() {
		const options = this.props.options.map(
			(option, i) => {
				return(
					<a 
						key={ i } 
						className={`dropdown-item ${ this.props.selected === i ? 'active' : '' }`} 
						onClick={e => this.select(i)}
					>
						{ option }
					</a>
				)
			}
		)

		return (
			<div className={`dropdown ${ this.state.open ? 'open' : '' }`} onClick={ e=>this.open(e) }>
				
				<button className='btn btn-sm btn-secondary-outline dropdown-toggle'>
					{ this.props.options[this.props.selected] }
				</button>

				<div className='dropdown-menu'>
					{ options }
				</div>

			</div>
		)
	}
}