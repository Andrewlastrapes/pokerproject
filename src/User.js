import React, { Component } from 'react'
import Card from "./Card.js"
import "./User.css"

class User extends Component {



render(){
	var array = []
	// Everytime a for loop has jsx, add a key property.
	for (var i = 0; i < this.props.player.hand.length; i++){
		array.push(<Card key={i} 
						number={this.props.player.hand[i].number}
						 suit={this.props.player.hand[i].suit}/>)			
	}



	return(

		<div className="user">

			<h4>{this.props.player.username}</h4>
			<h6>{array}</h6>
			<h6>{this.props.player.stack}</h6>
			<h6>{this.props.player.position}</h6>
			<h6>{this.props.player.isActive + "Active"}</h6>
			<h6>{this.props.player.folded + "folded"}</h6>
			<h6>{this.props.player.marker + "marker"}</h6>

			
			



		</div>
		)
}



}

export default User;