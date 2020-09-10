import React from 'react';
import { render } from '@testing-library/react';
import PlayerList from '.';


test('It exists', () => {
  expect(PlayerList).toBeDefined();
})

test('Renders the PlayerList Component', () => {
  const { getByTestId } = render(<PlayerList />);
  const  playerList = getByTestId('PlayerList');
  expect(playerList).toBeDefined();
});