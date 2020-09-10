import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Draft, TeamBuilder } from '..';
import { Player, AI } from '../../classes';

const Game = () => {
    let history = useHistory();

    // Get the game state
    const { mode, stage } = useSelector(({ game }) => game);

    // Get the Players
    const { userName, playerId } = useSelector(({ user }) => user);
    const [user, setUser] = useState(null);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      if (mode === 'singlePlayer') {
        const user = new Player(userName, playerId);
        setUser(user);
        setPlayers([user, new AI('Tahm', 1), new AI('MDP', 2), new AI('Andrew', 3)])
      } 
    }, [userName]);

    useEffect(() => {
      switch (stage) {
        case 'draft':
          history.push('/game/draft');
          break;
        case 'teamBuilder':
          history.push('/game/team');
          break;
        default:
          return;
      }
    }, [stage])

  return (
    <div className="game" data-testid="Game">
      <Switch>
        <Route path="/game/draft" >
          <Draft user={user} players={players} />
        </Route>
        <Route path="/game/team">
          <TeamBuilder user={user} players={players} />
        </Route>
        {/* <Route path="/game/battle" component={Battle} /> */}
      </Switch>
    </div>
  );
};


Game.propTypes = {};

Game.defaultProps = {};

export default Game;