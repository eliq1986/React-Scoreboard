import React from 'react';

import Header from './components/Header';
import Player from './components/Player';


class App extends React.Component {

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

incrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }

    })
  }

decrementScore = () => {
  this.setState(prevState => {
    return {
        score: prevState.score - 1
    }

  })
}


 render() {
   const playersArr = this.state.players.map(player =>
     <Player key={player.id.toString()}
             id={player.id}
             score={player.score}
             removePlayer={this.handleRemovePlayer}
             name={player.name} />);

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" playersArr={playersArr}/>
      {playersArr}
    </div>
  );
}
}


export default App;
