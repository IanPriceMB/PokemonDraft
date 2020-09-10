import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '.';


test('It exists', () => {
  expect(App).toBeDefined();
})

test('Renders landscape components', () => {
  const { getByTestId } = render(
    <Router>
      <App />
    </Router>
  );
  const  app = getByTestId('App');
  expect(app).toBeDefined();
});
