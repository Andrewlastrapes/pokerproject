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
      isActive: false
    }, 
      {
      username : "user2",
      clock : Date(),
      stack : 500,
      hand : [],
      position : "Small Blind",
      isActive: false
    },
      {
      username: "user3",
      clock : Date(),
      stack : 500,
      hand : [],
      position : "Big Blind",
      isActive: false
      }

    ]


    this.state = {
      users: users,
      deck : deck,
      board: {
        flop: [],
        turn: [],
        river: []
      }
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
                  river={this.river.bind(this)}/>

      </div>
    );
  }
}

export default App;
