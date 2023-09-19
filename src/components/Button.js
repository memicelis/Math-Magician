import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };
  const buttonClass = value === '0'
    ? 'calculator-button calculator-button--0'
    : 'calculator-button';
  return (
    <button className={buttonClass} type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
