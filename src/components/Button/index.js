import React from 'react';
import { string, func } from 'prop-types';

import { Container } from './styles';

const Button = ({ title, onClick }) => (
  <Container>
    <button type="button" onClick={onClick}>
      {title}
    </button>
  </Container>
);

Button.propTypes = {
  title: string.isRequired,
  onClick: func.isRequired,
};

export default Button;
