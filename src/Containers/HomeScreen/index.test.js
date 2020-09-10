import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from '.';


test('It exists', () => {
  expect(HomeScreen).toBeDefined();
})

test('Renders HomeScreen', () => {
  const { getByTestId } = render(
    <Router>
      <HomeScreen />
    </Router>
  );
  const homeScreen = getByTestId('HomeScreen');
  expect(homeScreen).toBeDefined();
});
