import React, { Component } from 'react';
import './Table.css';
import Board from "./Board.js"
import User from "./User.js"



class Table extends Component{
	constructor(props){
		super(props)

	}
	render(){

		// This represents the table
		// this.props.board
		// this.props.players
		//   {
        // flop: [deck.pop(), deck.pop(),deck.pop()],
        // turn: [],
        // river: []
    // }
    // {
    // 	  var users = [{
    //   username : "user1",
    //   clock : Date(),
    //   stack : 500,
    //   hand : [deck.pop(), deck.pop()],
    //   position : "",
    // }, 
    //   {
    //   username : "user2",
    //   clock : Date(),
    //   stack : 500,
    //   hand : [deck.pop(), deck.pop()],
    //   position : "",
    // }]
    // }



		var array = []

		for (var i = 0; i < this.props.players.length; i++){
			array.push(<User player={this.props.players[i]} />)
		}



		return(
			<div className="placeholder">

				<div className="table">
					{array}
					<Board flopTurnRiver2={this.props.flopTurnRiver}/>
					</div>
			</div>
			)



	}




}

export default Table;