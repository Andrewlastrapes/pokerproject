import React, { Component } from 'react';
import './Options.css';


class Options extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="options">
				

				<div onClick={this.props.deal}><a href="#">Deal</a></div>
				<div onClick={this.props.call}><a href="#">Call</a></div>
				<div onClick={this.props.fold}><a href="#">Fold</a></div>
				<div onClick={this.props.raise}><a href="#">Raise</a></div>
				<input type="text" raise="raise"/>
				 <input type="submit" value="Submit" />
				<div onClick={this.props.check}><a href="#">Check</a></div>
				
				
				


			</div>
			)



	}




}

export default Options;