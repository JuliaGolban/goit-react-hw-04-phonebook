import React from 'react';
import PropTypes from 'prop-types';
import TextBtn from './TextBtn.styled';

const TextButton = ({ text, type, onClick, ...allyProps }) => (
  <TextBtn type={type} onClick={onClick} {...allyProps}>
    {text}
  </TextBtn>
);

TextButton.defaultProps = {
  onClick: () => null,
  text: null,
};

TextButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default TextButton;
