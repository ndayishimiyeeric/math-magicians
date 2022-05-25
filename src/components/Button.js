import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { name, className, clickEvent } = this.props;
    return (
      <button type="button" className={className} onClick={() => clickEvent(name)}>{name}</button>
    );
  }
}

Button.defaultProps = {
  className: 'side-color',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  clickEvent: PropTypes.func.isRequired,
};
