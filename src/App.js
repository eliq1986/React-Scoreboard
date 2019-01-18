import React from 'react';

const players = [
  {
  name: "Guil",
  score: 50,
  id: 1
},
{
  name: "Treasure",
  score: 85,
  id: 2
},
{
  name: "Ashley",
  score: 95,
  id: 3
},
{
  name: "James",
  score: 80,
  id: 4
}
];

const Header = ({title, playersArr}) => {
   const numberOfPlayers = playersArr.length;
   return (
     <header>
      <h1>{title}</h1>
      <span className="stats">Players: {numberOfPlayers}</span>
     </header>
   )
}

const Player = ({name}) => {
  return (

   <div className="player">
    <span className="player-name">
       {name}
    </span>
    <Counter />
   </div>
  )
}

class Counter extends React.Component {

  state = {
   score: 0
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
  return (
    <div className="counter">
      <button onClick={this.decrementScore} className="counter-action decrement">-</button>
      <span className="counter-score">{this.state.score}</span>
      <button onClick={this.incrementScore} className="counter-action increment">+</button>
    </div>
  );
};
};

const App = () => {
  const playersArr = players.map(player => <Player key={player.id.toString()} name={player.name} />)
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" playersArr={players}/>
      {playersArr}
    </div>
  )
}


export default App;
