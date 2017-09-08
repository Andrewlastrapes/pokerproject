import React, { Component } from 'react';
import './Card.css';

class Card extends Component{
	constructor(props){
		super(props)

	this.state = {
		suit : "Hearts",
		number: 10
	}
}

render(){
	return(
		<div className="card">
			<h5>{this.state.suit}</h5>
			<h5>{this.state.number}</h5>

		</div>
		)


	}


}


export default Card; 