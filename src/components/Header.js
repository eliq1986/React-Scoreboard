import React from 'react';
import Stats from './Stats';

const Header = ({title, playersArr}) => {

   return (
     <header>
       <Stats playersArr={playersArr}/>
       <h1>{title}</h1>
     </header>
   )
}


export default Header;
