import React from 'react';
import { QuoteStyled as Styled } from './Quote.styled';

const Quote = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default Quote;
