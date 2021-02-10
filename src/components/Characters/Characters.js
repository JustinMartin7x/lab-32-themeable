import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({ image, name, id }) => (
  <div id={id}>
    <img src={image} alt={name} />
    <p>{name}</p>
    <p>{id}</p>
  </div>
);

Characters.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Characters;
