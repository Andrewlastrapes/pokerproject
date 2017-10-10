import React, { Component } from 'react'
import Card from "./Card.js"
import "./User.css"
import "./highlighted.css"

class User extends Component {
	constructor(props){
    super(props)

}

   


render(){
	var array = []
	// Everytime a for loop has jsx, add a key property.
	
	var shouldShow = this.props.clientSocketID === this.props.player.socketID

	for (var i = 0; i < this.props.player.hand.length; i++){
		array.push(<div key={i} className="col-xs-2"><Card 
						number={this.props.player.hand[i].number}
						 suit={this.props.player.hand[i].suit}
						 shouldShow={shouldShow}/></div>)			
	}

	var active = ""
	var folded = ""
	var inGame = ""
	


	return(

		
		<div className={this.props.player.isActive ? "highlighted" : "User"}>
			

			{this.props.player.username}
			{array}
			<h6>{"$" + this.props.player.stack}</h6>
			<h6>{this.props.player.position}</h6>
			<h6>{"$" + this.props.player.bet}</h6>

			
			

			
			


			
		</div>
		)
}



}

export default User;