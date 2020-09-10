import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default (players, cb, dependancies) => {
const { activePlayer } = useSelector(({ game }) => game);

  useEffect(() => {
    if (players[activePlayer] && players[activePlayer].isAI) cb();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependancies])
}