import React, { Component } from 'react';
import "./Image.css"


class Image extends Component{
	constructor(props){
		super(props)



		}



render(){
		
	var cardImage = "/cardImages/" + this.props.number + "_" + "of" + "_" + this.props.suit + ".png";
	var backOfCard = "/cardImages/back.png"
	
	return(
		<div className="image">
			
			<div><img src={this.props.shouldShow ? cardImage : backOfCard} height="80"></img></div>
			

		</div>
		)


	}


}


export default Image; 