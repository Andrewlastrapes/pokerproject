import React, { Component } from 'react';
import './Card.css';
import Deck from "./Deck.js"

// This represents the Card
// The card takes two props: "number" and "suit"
//    this.props.number
//    this.props.suit
// number looks like
//	12
// suit looks like
// "Hearts"
class Card extends Component{
	constructor(props){
		super(props)



		




}



render(){
	return(
		<div className="card">
			<h5>{this.props.number}</h5>
			<h5>{this.props.suit}</h5>
			

		</div>
		)


	}


}


export default Card; 