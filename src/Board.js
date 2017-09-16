import React, { Component } from 'react';
import Card from "./Card.js"


class Board extends Component{
	constructor(props){
		super(props)

	}
	render(){

		var flop = []
		var turn = []
		var river = []
		// Everytime a for loop has jsx, add a key property.
		for (var i = 0; i < this.props.flopTurnRiver2.flop.length; i++){
			flop.push(<div 	key={i} 
							className="col-xs-2"><Card number={this.props.flopTurnRiver2.flop[i].number}
						 	suit={this.props.flopTurnRiver2.flop[i].suit}/></div>)			
		}
		return(
			<div className="board">
				<div className="container">
					{flop}
				
			</div>
			
		</div>		
			)



	}




}

export default Board;