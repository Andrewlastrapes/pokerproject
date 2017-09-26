import React, { Component } from 'react';
import './Options.css';


class Options extends Component{
	constructor(props){
		super(props)

	}
	

	render(){

		var numUsers = this.props.players.length

		return(
			<div className="options">
				

				{numUsers === 1 ? "" : <div onClick={this.props.deal}><a>Deal</a></div>}
				<div onClick={this.props.call}><a>Call</a></div>
				<div onClick={this.props.fold}><a>Fold</a></div>
				
				
				<form onSubmit={this.props.handleSubmit}>
			       
			        <input type="text" value={this.props.raiseValue} onChange={this.props.handleChange}/>
			        <button type="submit" value="Submit">Raise</button>
			      </form>

				 <div onClick={this.props.allIn}><a>All In</a></div>
				<div onClick={this.props.check}><a>Check</a></div>
				
				
				


			</div>
			)



	}




}

export default Options;