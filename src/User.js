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
	
	


	var shouldShow = (this.props.clientSocketID === this.props.player.socketID) 

	for (var i = 0; i < this.props.player.hand.length; i++){
		array.push(<div key={i} className="col-xs-2"><Card 
						number={this.props.player.hand[i].number}
						 suit={this.props.player.hand[i].suit}
						 shouldShow={shouldShow}/></div>)			
	}



	return(

	<div className={"main"}>
		<div className={this.props.player.isActive ? "highlighted" : "User"}>
			

			<div className={"username"}>{this.props.player.username}</div>
			<div><h6 className={"stack"}>{"$" + this.props.player.stack.toFixed(2)}</h6></div>
			
			<div className={"cardArray"}>{array}</div>

			<div><h6 className={"position"}>{this.props.player.position}</h6></div>
			
			<div><h6 className={"bet"}>{"$" + this.props.player.bet.toFixed(2)}</h6></div>

			
			
		</div>
	</div>
		)
}



}

export default User;