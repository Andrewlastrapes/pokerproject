import React, { Component } from 'react';
import './Options.css';


class Options extends Component{
	constructor(props){
		super(props)

	}



	render(){
		
		var activeUser = []
		var marker = []
		var Rmarker = []
		

		// find active user 

		for(var i = 0; i < this.props.players.length; i++){
			if(this.props.players[i].isActive === true){
				activeUser = this.props.players[i]
			}
		}

		// find marker user

		for(var i = 0; i < this.props.players.length; i++){
			if (this.props.players[i].marker === true){
				marker = this.props.players[i]
			}

		}
		// find Rmarker user

		for(var i = 0; i < this.props.players.length; i++){
			if (this.props.players[i].Rmarker === true){
				Rmarker = this.props.players[i]
			} 
		}

		
		

		
		var numUsers = this.props.players.length
		var isActiveUser = this.props.socketid === activeUser.socketID
		

	return(
			<div className="options">

				

				{numUsers > 1 && this.props.phase === "Game Over" ? <div onClick={this.props.deal}><button type="button" class="btn btn-primary">Deal</button></div> : ""}  
				
				

				{isActiveUser === true && (activeUser.bet < marker.bet || activeUser.bet < Rmarker.bet) ?<div onClick={this.props.call}><button type="button" class="btn btn-primary">Call</button></div> : ""}
				
				{isActiveUser === true && (activeUser.bet < marker.bet || activeUser.bet < Rmarker.bet) ? <div onClick={this.props.fold}><button type="button" class="btn btn-primary">Fold</button></div> : ""} 
				
				{isActiveUser === true && (activeUser.bet === marker.bet || activeUser.bet === marker.bet) ? <div onClick={this.props.check}><button type="button" class="btn btn-primary">Check</button></div> : ""}
				
				{isActiveUser === false || this.props.phase === "Game Over" ? "" :<form onSubmit={this.props.handleSubmit}>
			       
				        <input type="text" value={this.props.raiseValue} onChange={this.props.handleChange}/>
				        <button type="button" class="btn btn-primary">Raise</button>
				      </form>}

				 
				
				
				
				


			</div>
			)



	}




}

export default Options;