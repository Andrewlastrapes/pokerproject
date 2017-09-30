import React, { Component } from 'react';
import './App.css';
import Options from "./Options.js"
import Table from "./Table.js"
import Image from "./Image.js"
import io from "socket.io-client"





class App extends Component {
  constructor(props){
    super(props)
   
  this.socket = new io("http://localhost:3001")


  this.socket.on("newState", (newState) => {
    this.setState(newState)
  console.log(newState)

  });



  // Emits: Folds, Calls, Raise, Check, All In, Leaves game

   this.state = {
      users: [],
      deck : [],
      flop: [],
      turn: [],
      river: [],
      phase: "Game Over",
      pot: 0,
      fold: [],
      raiseValue: 0,

    }
  



  }


  deal(){
  
    this.socket.emit("Dealing")
   console.log(this.state.users)
  }



  

  call(){

      this.socket.emit("Call")

      
      }


  check(){

    this.socket.emit("Check")
        
}


  raise(){
  
  this.socket.emit("Raise", parseInt(this.state.raiseValue))


  }

  fold(){

   this.socket.emit("Fold")

    }

  reset(){
    this.socket.emit("Reset")
  }


  handleSubmit(event) {
    event.preventDefault();
    var markerUser = []

    for (var i = 0; i < this.state.users.length; i++){
          if (this.state.users[i].marker === true){
            markerUser = this.state.users[i]
          }
       }
       
    var isNumber = parseInt(this.state.raiseValue)

    var isDoubleMarker = parseInt(this.state.raiseValue) >= markerUser.bet * 2 


    if (isNumber && isDoubleMarker){
        this.raise()
      } else {
        alert("Please enter valid number")
      }
    
    
    
  }

   handleChange(event) {console.log(event.target.value)
    this.setState({raiseValue: event.target.value});
  }


  
  

  render() {
  
 
    return (
      <div className="App">

        

        <Table players={this.state.users}
               flop={this.state.flop}
               turn={this.state.turn}
               river={this.state.river}
               phase={this.state.phase}
               pot = {this.state.pot}/>


        
        <Options  deal={this.deal.bind(this)}
                  call ={this.call.bind(this)}
                  fold={this.fold.bind(this)}
                  check={this.check.bind(this)}
                  handleSubmit={this.handleSubmit.bind(this)}
                  handleChange={this.handleChange.bind(this)}
                  players={this.state.users}
                  phase={this.state.phase}/>
      
      {this.state.phase}

      </div>
    );
  }
}

export default App;
