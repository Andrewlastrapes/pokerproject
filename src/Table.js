import React, { Component } from 'react';
import './Table.css';



class Table extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="placeholder">
				<div className="user">
					<h5>{this.props.players[0].username}</h5>
				</div>
				<div className="table">
					<h1></h1>
					</div>
			</div>
			)



	}




}

export default Table;