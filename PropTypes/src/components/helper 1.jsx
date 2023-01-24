import React from 'react';
import PropTypes from 'prop-types';

const Helper1 = ({ data }) => {
  const { username, roll} = data;

  return (
    <>
      <div>
        <h2> Best approach: </h2>
        <h3>Name: {username}</h3>
        <h3>Roll: {roll}</h3>
      </div>
    </>
  );
};

Helper1.propTypes = {
    username: PropTypes.string.isRequired,
    roll: PropTypes.number.isRequired,
}


export default Helper1;
