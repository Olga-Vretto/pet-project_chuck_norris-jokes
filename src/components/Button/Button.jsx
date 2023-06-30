import React from 'react';
import { ButtonStyled as Styled } from './Button.styled';

const Button = ({ children, fetchQuote }) => {

 const handleClick =() => {
    fetchQuote('?category=' + children)
  }
  return (
    <Styled.Button onClick={handleClick} type='button'>
      {children}
    </Styled.Button>
  );
};

export default Button;
