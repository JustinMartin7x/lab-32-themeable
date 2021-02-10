import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Characters from './Characters';

const CharacterList = ({ characters }) => {
  const characterItems = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <Characters image={character.image} name={character.name} />
      </Link>
    </li>
  ));

  return <ul data-testid="these">{characterItems}</ul>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default CharacterList;
