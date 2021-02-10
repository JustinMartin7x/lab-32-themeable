import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterById from './CharacterById';
import charactersByIdResponse from '../fixtures/characterById.json';


const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d1', (req, res, ctx) => {
    return res(ctx.json(charactersByIdResponse));
  })
);

describe('CharacterById contianer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays an avatar character and shows details', async() => {
    render(<CharacterById match={{ params: { id: '5cf5679a915ecad153ab68d1'} }} /> );

    screen.getByText('Loading'); 
    return waitFor(() => {
      screen.getByAltText('character image');
    }); 
  });
});
