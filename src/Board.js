import React, { Component } from 'react';
import Card from "./Card.js"



// This represents the Board
// The Board gets passed a prop called "board"
//    this.props.board
// the "board" prop looks like:
//{
  //   flop: [deck.pop(), deck.pop(),deck.pop()],
  //   turn: [],
  //   river: []
  // }
class Board extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="board">
				<Card number={this.props.flopTurnRiver2.flop[0].number}	
					  suit=	{this.props.flopTurnRiver2.flop[0].suit}/>
				<Card number={this.props.flopTurnRiver2.flop[1].number}	
					  suit=	{this.props.flopTurnRiver2.flop[1].suit}/>
				<Card number={this.props.flopTurnRiver2.flop[2].number}	
					  suit=	{this.props.flopTurnRiver2.flop[2].suit}/>
			</div>		
			)



	}




}

export default Board;