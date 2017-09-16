import React, { Component } from 'react';
import './Options.css';


class Options extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="options">
				
				<div><a href="#">Call</a></div>
				<div><a href="#">Fold</a></div>
				<div onClick={this.props.deal}><a href="#">Deal</a></div>
				<div onClick={this.props.flop}><a href="#">Flop</a></div>
				<div onClick={this.props.turn}><a href="#">Turn</a></div>
				<div onClick={this.props.river}><a href="#">River</a></div>
				


			</div>
			)



	}




}

export default Options;