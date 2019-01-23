import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({title, playersArr}) => {

   return (
     <header>
       <Stats playersArr={playersArr}/>
       <h1>{title}</h1>
       <Stopwatch />
     </header>
   )
}


export default Header;
