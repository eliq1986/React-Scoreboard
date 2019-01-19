import React from 'react';
import Counter from './Counter';

const Player = ({name, removePlayer, id, score}) => {
  return (
   <div className="player">
    <span className="player-name">
    <button onClick={()=> removePlayer(id)} className="remove-player">✖</button>
       {name}
    </span>
    <Counter score={score}/>
   </div>
  )
}



export default Player;
