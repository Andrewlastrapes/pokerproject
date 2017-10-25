import React, { Component } from 'react';
import './App.css';
import Options from "./Options.js"
import Table from "./Table.js"
import Image from "./Image.js"
import io from "socket.io-client"


function serialize(obj){
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}



class App extends Component {
  constructor(props){
    super(props)


  
  
  this.socket = new io(window.location.protocol + "//" + window.location.host, {query: serialize(window.user)})
 

  this.socket.on("newState", (newState) => {
    this.setState(newState)


  });

  this.socket.on("socket id", (socketid) => {
    this.setState({
      socketid: socketid
    })
  })



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
      handNumber: 0,
      winners : []
    
    
     


    }
  



  }


  deal(){
  
    this.socket.emit("Dealing")

  
  }



  

  call(){

      this.socket.emit("Call")


      
      }


  check(){

    this.socket.emit("Check")
        
}


  raise(){
  
  this.socket.emit("Raise", parseFloat(this.state.raiseValue))


  }

  fold(){

   this.socket.emit("Fold")

    }


 


  handleSubmit(event) {
    event.preventDefault();
    var markerUser = []
    var RmarkerUser = []

    for (var i = 0; i < this.state.users.length; i++){
          if (this.state.users[i].marker === true){
            markerUser = this.state.users[i]
          }
       }
      for (var i = 0; i < this.state.users.length; i++){
          if (this.state.users[i].Rmarker === true){
            RmarkerUser = this.state.users[i]
          }
       }

       
    var isNumber = parseInt(this.state.raiseValue)

    var isDoubleMarker = parseInt(this.state.raiseValue) >= markerUser.bet * 2 
    var isDoubleRMarker = parseInt(this.state.raiseValue) >= RmarkerUser.bet * 2 


    if (isNumber && (isDoubleMarker || isDoubleRMarker)){
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
               pot={this.state.pot.toFixed(2)}
               socketid={this.state.socketid}
               handNumber={this.state.handNumber}
               deal={this.deal.bind(this)}
               call ={this.call.bind(this)}
               fold={this.fold.bind(this)}
               raise={this.raise.bind(this)}
               check={this.check.bind(this)}
               handleSubmit={this.handleSubmit.bind(this)}
               handleChange={this.handleChange.bind(this)}
               phase={this.state.phase}
               winners={this.state.winners}/>

     



     

      

      </div>
    );
  }
}

export default App;
