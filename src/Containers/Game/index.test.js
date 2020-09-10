import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Game from '.';


test('It exists', () => {
  expect(Game).toBeDefined();
})

test('Renders Game', () => {
  const { getByTestId } = render(
    <Router>
      <Game />
    </Router>
  );
  const  game = getByTestId('Game');
  expect(game).toBeDefined();
});
