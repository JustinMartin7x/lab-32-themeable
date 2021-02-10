import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ image }) => (
  <div>
    <img src={image} alt="character image" />
  </div>
);

Details.propTypes = {
  image: PropTypes.string,
};
export default Details;
