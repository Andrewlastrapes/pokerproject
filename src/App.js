import React, { Component } from 'react';
import './App.css';
import Options from "./Options.js"
import Table from "./Table.js"
import Image from "./Image.js"


function generateNewDeck(){
  var hearts = []
  var spades = []
  var diamonds = []
  var clubs = []

  
  for (var i = 2; i < 15; i++ ){
    hearts.push({
      number : i,
      suit: "hearts"
    })
    spades.push({
      number : i,
      suit: "spades"
    })
    diamonds.push({
      number : i,
      suit: "diamonds"
    })
    clubs.push({
      number : i,
      suit: "clubs"
    })  
  }

  var deck = hearts.concat(spades).concat(diamonds).concat(clubs);
  var currentIndex = deck.length, temporaryValue, randomIndex
  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }

  return deck;
}


class App extends Component {
  constructor(props){
    super(props)
   



  var deck = generateNewDeck()


   var users = [{
      username : "user1",
      clock : Date(),
      stack : 500,
      hand : [],
      position : "Dealer",
      isActive: true,
      folded: false,
      marker: false
    }, 
      {
      username : "user2",
      clock : Date(),
      stack : 500,
      hand : [],
      position : "Small Blind",
      isActive: false,
      folded: false,
      marker: false
    },
      {
      username: "user3",
      clock : Date(),
      stack : 500,
      hand : [],
      position : "Big Blind",
      isActive: false,
      folded: false,
      marker: true
      }

    ]


    this.state = {
      users: users,
      deck : deck,
      board: {
        flop: [],
        turn: [],
        river: []
      },
      phase: "preflop",
      
    }
  



  }


  deal(){
    var newUsers = [];
    var NewDeck = generateNewDeck()
    // Copies old user array to newUsers
    for (var i = 0; i < this.state.users.length; i++){
      newUsers.push(Object.assign({}, this.state.users[i]))
      newUsers[i].hand = [NewDeck.pop(), NewDeck.pop()]
    }



    this.setState({
      users: newUsers,
      deck: NewDeck

    });
  }

  nextTurn(){
       var newActive = []
       var newUsers = []
   
    for (var i = 0; i < this.state.users.length; i++){
        newUsers.push(Object.assign({}, this.state.users[i]))
        if (newUsers[i].isActive == true){
         newUsers[i].isActive = false 
        
         newActive = i + 1 
         if (newActive == this.state.users.length){
          newActive = 0;
         }
        } 
      }
      while(newUsers[newActive].folded == true){
        newActive++
      }
      newUsers[newActive].isActive = true
      var newPhase = this.state.phase
      if(newUsers[newActive].marker == true){
        
        if(this.state.phase == "preflop"){
          this.flop()
          newPhase = "flop"
         }
        if(this.state.phase == "flop"){
          this.turn()
          newPhase = "turn"
        }
         if(this.state.phase == "turn"){
          this.river()
          newPhase = "river"
        }

      }

      this.setState({
        users: newUsers,
        phase: newPhase
      })
  

  }

  call(){
    this.nextTurn()
  }

  check(){
    this.nextTurn()
  }

  raise(){
    this.state.users.marker = true;
    this.nextTurn()
   }

  fold(){
   
   var newActive = []
   var newUsers = []
   
    for (var i = 0; i < this.state.users.length; i++){
        newUsers.push(Object.assign({}, this.state.users[i]))
        if (newUsers[i].isActive == true){
         newUsers[i].folded = true;
        
     }
   }
    this.setState({
        users: newUsers
      })
   this.nextTurn()
}

  flop(){
    this.setState({
      board: {
        flop: [this.state.deck.pop(), this.state.deck.pop(), this.state.deck.pop()]
      } 
    })
  }

  turn(){
    this.setState({
      board: {
        turn: [this.state.deck.pop()]
      } 
    })
  }

  river(){
    this.setState({
      board: {
        river: [this.state.deck.pop()]
      } 
    })
  }

  render() {
  
 
    return (
      <div className="App">

        <Image />

        <Table players={this.state.users}
               flopTurnRiver= {this.state.board}/>

        
        <Options  deal={this.deal.bind(this)}
                  flop={this.flop.bind(this)}
                  turn={this.turn.bind(this)}
                  river={this.river.bind(this)}
                  call ={this.call.bind(this)}
                  fold={this.fold.bind(this)}
                  raise={this.raise.bind(this)}
                  check={this.check.bind(this)}/>

      </div>
    );
  }
}

export default App;
