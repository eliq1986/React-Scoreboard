import React from 'react';

const Stats = ({playersArr}) => {

  const numberOfPlayers = playersArr.length;
  const totalPoints = playersArr.reduce((total , player) => {
    return total + player.props.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{numberOfPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
