import React from 'react';
import PropTypes from 'prop-types';
import { DraftList, PlayerList, ActiveRoster, ReadyButton } from '../../Components';
import './index.scss';

export const TeamBuilder = ({ user, players }) => {
  return (
    <div className="team-builder" >
      <div className="team-builder__moniter">
        <DraftList draftMon={user ? user.team : []} />
        <PlayerList players={players ? players.filter((ele) => ele.id != user.id) : []}/>
      </div>
      <ActiveRoster />
      <ReadyButton />
    </div>
  );
};

TeamBuilder.propTypes = {
  user: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
};

TeamBuilder.defaultProps = {
  user: null,
  players: null,
};

export default TeamBuilder;