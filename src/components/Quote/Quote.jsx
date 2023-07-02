import React from 'react';
import { QuoteStyled as Styled } from './Quote.styled';
import { storageService } from '../../services/storage';
import like from '../../assets/images/like.jpeg';

const Quote = ({ children, showLikeImage = true, justifyContent = true }) => {
  const handleClick = () => {
    storageService.setQuote(children);
  };
  return (
    <Styled.Wrapper justifyContent={justifyContent}>
      <Styled.Text>{children}</Styled.Text>

      {showLikeImage && <Styled.Image src={like} onClick={handleClick}></Styled.Image>}
    </Styled.Wrapper>
  );
};

export default Quote;
