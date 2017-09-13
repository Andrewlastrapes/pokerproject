import React, { Component } from 'react'
import Card from "./Card.js"

class User extends Component {
	constructor(props){
		super(props)



	}
// This class represents a user.
// It gets passed a player prop.
// this.props.player
//   {username : "user2",
      // clock : Date(),
      // stack : 500,
      // hand : [deck.pop(), deck.pop()],
      // position : ""
      // }


render(){
	var array = []
	for (var i = 0; i < this.props.player.hand.length; i++){
		array.push(<Card number={this.props.player.hand[i].number}
						 suit={this.props.player.hand[i].suit}/>)			
	}

	return(

		<div className="user">

			<h4>{this.props.player.username}</h4>
			{array}
			
			



		</div>
		)
}



}

export default User;