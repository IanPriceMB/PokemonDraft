import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DraftList, PlayerList } from '../../Components';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { turnEnd, roundEnd } from '../../redux/game/actions';
import { pokeDraftGenerator } from '../../utils/helperFunctions';
import { useAI } from '../../utils/customHooks';

const Draft = ({ user, players }) => {
  const dispatch = useDispatch();
  const { isLoading: isGameLoading, draftRound, activePlayer } = useSelector(({ game }) => game);

  // Flag for active player
  const [isNotActive, setIsNotActive] = useState(true);

  // Generate the Pokemon
  const [draftMon, setDraftMon] = useState(pokeDraftGenerator());
  useEffect(() => { setDraftMon(pokeDraftGenerator()); }, [draftRound])

  // Check if user is active player else disable buttons
  useEffect(() => {if (user) activePlayer === user.id ? setIsNotActive(false) : setIsNotActive(true) }, [ user, activePlayer, setIsNotActive]);

  // Draft a Mon
  const handleDraftSelection = (pokemon) => { 
    players[activePlayer].addPokemon(pokemon);
    setDraftMon(mons => mons.filter((ele) => ele.name != pokemon.name));

    // Update the game state
    dispatch(turnEnd({ activePlayer }));
  };

  // Handle AI draft
  useAI(players, () => { handleDraftSelection(draftMon[Math.floor(Math.random()*draftMon.length)]); }, [activePlayer]);

  // Handle round end
  useEffect(() => { draftMon.length === 0 && dispatch(roundEnd({ draftRound })); }, [draftMon]);

  if (isGameLoading) return 'Loading game data...';
  if (!user || !players.length) return 'Loading player data...';
  return (
    <div className="draft" data-testid="Draft">
      <DraftList draftMon={draftMon} isNotActive={isNotActive} onClick={handleDraftSelection} />
      <PlayerList players={players} />
    </div>
  );
};


Draft.propTypes = {
  user: PropTypes.object,
  players: PropTypes.array,
};

Draft.defaultProps = {
  user: null,
  players: [],
};

export default Draft;