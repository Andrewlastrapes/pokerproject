import React, { Component } from 'react'
import Card from "./Card.js"
import "./User.css"
import "./highlighted.css"

class User extends Component {
	constructor(props){
    super(props)

}
    // active(){
    // 	if (this.props.player.isActive == true) {
    // 	return(<h2 className="highlighted">Hi</h2>)
    // 	}
    // }



render(){
	var array = []
	// Everytime a for loop has jsx, add a key property.
	for (var i = 0; i < this.props.player.hand.length; i++){
		array.push(<Card key={i} 
						number={this.props.player.hand[i].number}
						 suit={this.props.player.hand[i].suit}/>)			
	}

	

	return(

		// <div className="user">
		<div className={this.props.player.isActive ? "highlighted" : "User"}>

			<h4>{this.props.player.username}</h4>
			<h6>{array}</h6>
			<h6>{this.props.player.stack}</h6>
			<h6>{this.props.player.position}</h6>
			<h6>{this.props.phase}</h6>
			
			



		</div>
		)
}



}

export default User;