import React, { Component } from 'react';
import './Table.css';
import Board from "./Board.js"
import User from "./User.js"



class Table extends Component{
	constructor(props){
		super(props)

	}
	render(){



		var array = []

		for (var i = 0; i < this.props.players.length; i++){
			array.push(<User player={this.props.players[i]} />)
		}




		return(
			
			<div className="table">

				
				<div className="User1">{array[0]}</div>
				<div className="User2">{array[1]}</div>
				<div className="User3">{array[2]}</div>
				<div className="User4">{array[3]}</div>
				<div className="User5">{array[4]}</div>
				<div className="User6">{array[5]}</div>
				<div className="User7">{array[6]}</div>
				<div className="User8">{array[7]}</div>



				<Board className="board"flop={this.props.flop}
										turn={this.props.turn}
										river={this.props.river}
										pot={this.props.pot}/>
				<div className="phase">{this.props.phase}</div>

				</div>
			
			)



	}




}

export default Table;