import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Draft from '.';


test('It exists', () => {
  expect(Draft).toBeDefined();
})

test('Renders Draft', () => {
  const { getByTestId } = render(
    <Router>
      <Draft />
    </Router>
  );
  const draft = getByTestId('Draft');
  expect(draft).toBeDefined();
});
