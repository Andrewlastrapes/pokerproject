import React, { Component } from 'react';
import './Card.css';
import Deck from "./Deck.js"

class Card extends Component{
	constructor(props){
		super(props)

	var suits = ["Hearts", "Clubs", "Spades", "Diamonds"]
	var numbers = [2, 3, 4, 5, 6, 7, 8 , 9, 10, "Jack", "Queen", "King", "Ace"]
	var randSuit = suits[Math.floor(Math.random() * suits.length)];
	var randNumber = numbers[Math.floor(Math.random() * numbers.length)];


	this.state = {
		
		number: randNumber,
		suit : randSuit
	}
}

render(){
	return(
		<div className="card">
			<h5>{this.state.number}</h5>
			<h5>{this.state.suit}</h5>

		</div>
		)


	}


}


export default Card; 