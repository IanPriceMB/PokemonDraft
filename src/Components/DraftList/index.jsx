import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const DraftList = ({ draftMon, isNotActive, onClick }) => (
  <div className="draft-list" data-testid="DraftList">
    <h3 className="draft-list__header">
      Pokemon
    </h3>
    <div className="draft-list__table-header">
      <span>
        Pokemon
      </span>
      <span>
        HP
      </span>
      <span>
        Power
      </span>
    </div>
    <ul className="draft-list__list">
      {draftMon.map(pokemon => (
        <li key={pokemon.name} className="draft-list__item">
          <button
            className="draft-list__button"
            id={`${pokemon.name}DraftListButton`}
            data-testid={`${pokemon.name}DraftListButton`}
            onClick={() => onClick(pokemon)}
            disabled={isNotActive}
          >
            <div className="draft-list__stats">
              <span className="draft-list__stat">
                {pokemon.name}
              </span>
              <span className="draft-list__stat">
                {pokemon.hp}
              </span>
              <span className="draft-list__stat">
                {pokemon.power}
              </span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  </div>
);


DraftList.propTypes = {
  draftMon: PropTypes.arrayOf(PropTypes.shape()),
  isNotActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

DraftList.defaultProps = {
  draftMon: [],
  isNotActive: false,
};

export default DraftList;