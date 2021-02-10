import React from 'react';
import { useCharacterById } from '../hooks/characters';
import Details from '../components/Details/Details';
import Loading from '../components/Loading/Loading';
import PropTypes from 'prop-types';

const CharacterById = ({ match }) => {
  const { loading, character } = useCharacterById(match.params.id);

  if (loading) return <Loading />;
  return <Details {...character} />;
};

CharacterById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharacterById;
