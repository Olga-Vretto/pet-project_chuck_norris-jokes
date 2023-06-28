import React from 'react';
import { ButtonStyled as Styled } from './Button.styled';

const Button = ({ children, onClick }) => {
  return (
    <Styled.Button onClick={onClick} type='button'>
      {children}
    </Styled.Button>
  );
};

export default Button;
