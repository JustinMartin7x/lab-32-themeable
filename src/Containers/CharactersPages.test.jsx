import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ApiData from '../fixtures/avatarApi.json';
import CharactersPages from './CharactersPages';
import { MemoryRouter as Router } from 'react-router-dom';


const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(ctx.json(ApiData));
  })
);

describe('Characters page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches a list of Avatar characters', async() => {
    render(
      <Router>
        <CharactersPages />
      </Router>);
 

    screen.getByText('Loading');

    const listOfCharacters = await screen.findByTestId('these');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});

