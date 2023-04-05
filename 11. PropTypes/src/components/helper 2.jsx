import React from 'react';
import PropTypes from 'prop-types';

const Helper2 = ({ username, roll, info }) => {
  const {id, name} = info;
  return (
    <div>
      <div>
        <h2> SO SO approach: </h2>
        <h4>{username}</h4>
        <h4>{roll}</h4>
        <h4>{id}</h4>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

Helper2.propTypes = {
    username: PropTypes.string,
    roll: PropTypes.number,
    info:PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }).isRequired
};

export default Helper2;
