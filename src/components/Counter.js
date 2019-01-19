import React from 'react';

const Counter = ({ score }) => {
  return (
    <div className="counter">
      <button  className="counter-action decrement">-</button>
      <span    className="counter-score">{score}</span>
      <button  className="counter-action increment">+</button>
    </div>
  );
};


export default Counter;
