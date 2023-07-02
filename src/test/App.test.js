/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {cleanup, screen, render} from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<App/>);
  const checkbox = screen.getByText('Eslint configured successfully');
  // eslint-disable-next-line no-undef
  expect(checkbox).toBeInTheDocument();
});
