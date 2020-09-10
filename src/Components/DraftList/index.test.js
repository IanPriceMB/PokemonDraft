import React from 'react';
import { render } from '@testing-library/react';
import DraftList from '.';


test('It exists', () => {
  expect(DraftList).toBeDefined();
})

test('Renders the DraftList Component', () => {
  const { getByTestId } = render(<DraftList />);
  const  draftList = getByTestId('DraftList');
  expect(draftList).toBeDefined();
});