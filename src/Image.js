import React, { Component } from 'react';
import "./Image.css"


class Image extends Component{
	constructor(props){
		super(props)



		}



render(){
	return(
		<div className="image">
			
			<div><img src="/cardImages/" + {this.props.number} + {this.props.suit} + ".png" height="40"></img></div>
			

		</div>
		)


	}


}


export default Image; 