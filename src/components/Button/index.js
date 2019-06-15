import React from 'react';
import { string, func } from 'prop-types';

import { StyledButton } from './styles';

const Button = ({ title, onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {title}
  </StyledButton>
);

Button.propTypes = {
  title: string.isRequired,
  onClick: func.isRequired,
};

export default Button;
