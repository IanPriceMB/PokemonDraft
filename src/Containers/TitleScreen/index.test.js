import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TitleScreen from '.';


test('It exists', () => {
  expect(TitleScreen).toBeDefined();
})

test('Renders TitleScreen', () => {
  const { getByTestId } = render(
    <Router>
      <TitleScreen />
    </Router>
  );
  const titleScreen = getByTestId('TitleScreen');
  expect(titleScreen).toBeDefined();
});
