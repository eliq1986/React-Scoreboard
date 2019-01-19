import React from 'react';

const Header = ({title, playersArr}) => {
   const numberOfPlayers = playersArr.length;
   return (
     <header>
      <h1>{title}</h1>
      <span className="stats">Players: {numberOfPlayers}</span>
     </header>
   )
}


export default Header;
