import React, { Component } from 'react';
import './Options.css';


class Options extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="options">
				

				<div onClick={this.props.deal}><a>Deal</a></div>
				<div onClick={this.props.call}><a>Call</a></div>
				<div onClick={this.props.fold}><a>Fold</a></div>
				
				
				<form onSubmit={this.handleSubmit}>
			        <label>
			          Raise
			          <input type="text" value={this.props.raiseValue} onChange={this.handleChange}/>
			        </label>
			        <input type="submit" value="Submit" />
			      </form>

				 <div onClick={this.props.allIn}><a>All In</a></div>
				<div onClick={this.props.check}><a>Check</a></div>
				
				
				


			</div>
			)



	}




}

export default Options;