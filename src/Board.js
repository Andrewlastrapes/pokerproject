import React, { Component } from 'react';
import Card from "./Card.js"




class Board extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="board">
				<Card number={this.props.board.flop[0].number}	
					  suit=	{this.props.board.flop[0].suit}/>
				<Card number={this.props.board.flop[1].number}	
					  suit=	{this.props.board.flop[1].suit}/>
				<Card number={this.props.board.flop[2].number}	
					  suit=	{this.props.board.flop[2].suit}/>
			</div>		
			)



	}




}

export default Board;