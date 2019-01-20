import React, { Component } from 'react';


import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';


class App extends Component {

  state = {
    players:[{
    name: "Guil",
    id: 1,
    score: 0
  },
  {
    name: "Treasure",
    id: 2,
    score: 0
  },
  {
    name: "Ashley",
    id: 3,
    score: 0
  },
  {
    name: "James",
    id: 4,
    score: 0
  }]
};



handleRemovePlayer = id => {
  this.setState(prevState => {
    return {
        players: prevState.players.filter(player => player.id !== id)
    }

  });
}

handleScore = (index, delta) => {
      this.setState(prevState => ({
          score: prevState.players[index].score += delta
      }));
      console.log(this.state.players[0].score);
  }



 render() {
   const playersArr = this.state.players.map((player, index) =>
     <Player key={player.id.toString()}
       playerIndex={index}
       id={player.id}
       score={player.score}
       removePlayer={this.handleRemovePlayer}
       name={player.name}
       changeScore={this.handleScore}
     />);

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" playersArr={playersArr}/>
      {playersArr}
      <AddPlayerForm />
    </div>
  );
}
}


export default App;
