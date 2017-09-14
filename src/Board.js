import React, { Component } from 'react';
import Card from "./Card.js"


class Board extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="board">
				<div className="container">
					<div className="col-xs-2"> <Card number={this.props.flopTurnRiver2.flop[0].number}	
					  suit=	{this.props.flopTurnRiver2.flop[0].suit}/></div>
					<div className="col-xs-2"><Card number={this.props.flopTurnRiver2.flop[1].number}	
					  suit=	{this.props.flopTurnRiver2.flop[1].suit}/></div>
					<div className="col-xs-2"><Card number={this.props.flopTurnRiver2.flop[2].number}	
					  suit=	{this.props.flopTurnRiver2.flop[2].suit}/></div>
			</div>
			
		</div>		
			)



	}




}

export default Board;