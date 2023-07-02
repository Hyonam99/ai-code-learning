/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {cleanup, screen, render} from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved
import SampleComponent from '../../components/SampleComponent';

afterEach(cleanup);

it('sample component renders', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<SampleComponent/>);
  const checkbox = screen.getByText('SampleComponent');
  // eslint-disable-next-line no-undef
  expect(checkbox).toBeInTheDocument();
});
