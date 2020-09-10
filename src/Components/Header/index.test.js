import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';


test('It exists', () => {
  expect(Header).toBeDefined();
})

test('Renders the Header Component', () => {
  const { getByTestId } = render(<Header />);
  const  header = getByTestId('Header');
  expect(header).toBeDefined();
});

test('Header Contains the title Pokemon Draft!', () => {
  const { getByText } = render(<Header />);
  const header = getByText('Pokemon Draft!');
  expect(header).toBeDefined();
});
