import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const PlayerList = ({ players }) => (
  <div className="player-list" data-testid="PlayerList">
    <h3 className="player-list__header">
      Trainers
    </h3>
    <div className="player-list__table-header">
      <span>
        Name
      </span>
      <span>
        Pokemon
      </span>
    </div>
    <ul className="player-list__list">
      {players.map(player => (
        <li className="player-list__item" key={player.name}>
          <span className="player-list__player-name">
            {player.name}
          </span>
          <ul className="player-list__team">
            {player.team.map((pokemon, index) => (
              <li className="player-list__pokemon" key={`${player.name}-team-${index}`}>
                {pokemon ? pokemon.name : 'X'}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()),
};

PlayerList.defaultProps = {
  players: [],
};

export default PlayerList;