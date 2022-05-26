import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, className, clickEvent } = props;
  return (
    <button type="button" className={className} onClick={() => clickEvent(name)}>{name}</button>
  );
};

Button.defaultProps = {
  className: 'side-color',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickEvent: PropTypes.func.isRequired,
};

export default Button;
