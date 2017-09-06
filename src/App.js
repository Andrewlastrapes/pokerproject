import React, { Component } from 'react';
import './App.css';
import Options from "./Options.js"
import Table from "./Table.js"

class App extends Component {
  constructor(props){
    super(props)
    var users = [{
      username : "user1",
      clock : Date(),
      stack : 500,
      hand : ["", ""],
      position : "",
    }, 
      {
      username : "user2",
      clock : Date(),
      stack : 500,
      hand : ["", ""],
      position : "",
    }]


    this.state = {
      users: users
    }
  }

  render() {
    return (
      <div className="App">
      <Options />
      <Table players={this.state.users}/>
      </div>
    );
  }
}

export default App;
