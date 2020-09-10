import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';


test('It exists', () => {
  expect(Footer).toBeDefined();
})

test('Renders the footer', () => {
  const { getByTestId } = render(<Footer />);
  const  footer = getByTestId('Footer');
  expect(footer).toBeDefined();
});

test('Footer Contains a water-mark div', () => {
  const { getByTestId } = render(<Footer />);
  const waterMark = getByTestId('FooterWaterMark');
  expect(waterMark).toBeDefined();
});

test('Water mark contains my name', () => {
  const { getByText } = render(<Footer />);
  const waterMark = getByText('Made by: Ian Price');
  expect(waterMark).toBeDefined();
});
