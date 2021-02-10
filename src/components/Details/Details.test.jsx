import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import Details from './Details';


describe('renders Detail Page', () => {
  afterEach(() => cleanup());

  it ('will render a Detail page that consists of an image', () => {
    const { asFragment } =
    render(<Details 
      image = "some text"

    />);

    expect(asFragment()).toMatchSnapshot();

  });
});

