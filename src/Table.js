import React, { Component } from 'react';


class Table extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className="table">
				<h1>{this.props.players[0].username}</h1>

			</div>
			)



	}




}

export default Table;