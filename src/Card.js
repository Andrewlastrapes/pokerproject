import React, { Component } from 'react';
import './Card.css';
import Image from "./Image.js"


class Card extends Component{
	constructor(props){
		super(props)

}



render(){
	return(
		<div className="card">
			<h5>{this.props.number}
			{this.props.suit}</h5>

			 <Image number={this.props.number}
			 		suit={this.props.suit}/>
			

		</div>
		)


	}


}


export default Card; 