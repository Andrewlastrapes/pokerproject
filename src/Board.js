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
		
		for (var i = 0; i < this.props.flop.length; i++){
			flop.push(<div 	key={i} 
							className="col-xs-1"><Card number={this.props.flop[i].number}
						 	suit={this.props.flop[i].suit}/></div>)			

		}
			for (var i = 0; i < this.props.turn.length; i++){
			turn.push(<div 	key={i} 
							className="col-xs-1"><Card number={this.props.turn[i].number}
						 	suit={this.props.turn[i].suit}/></div>)			

		}
			for (var i = 0; i < this.props.river.length; i++){
			river.push(<div 	key={i} 
							className="col-xs-1"><Card number={this.props.river[i].number}
						 	suit={this.props.river[i].suit}/></div>)			

		}
		

		
		
		
		return(
			<div className="board">
				<div className="container">
					{flop}
					{turn}
					{river}

					
				</div>
				<div className="pot">{"Pot: $"+ this.props.pot}</div>
			
		</div>		
			)



	}




}

export default Board;