import React from 'react';
import Counter from './Counter';

const Player = ({ name, removePlayer, id, score, changeScore, playerIndex}) => {
  return (
   <div className="player">
     <span className="player-name">
       <button onClick={()=> removePlayer(id)} className="remove-player">✖</button>
       {name}
     </span>
     <Counter playerIndex={playerIndex} score={score} changeScore={changeScore} id={id}/>
   </div>
  )
}



export default Player;
