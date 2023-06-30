import React from 'react';
import Button from '../../components/Button/Button';
import Quote from '../../components/Quote/Quote';
import { useMainState } from './main.state';
import { MainStyled as Styled } from './main.styled';

const Main = () => {
  const { isLoading, categories, quote, fetchQuote } = useMainState();
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Styled.ButtonsWrapper >
        {categories.map((category, index) => (
          <Button key={index} fetchQuote={fetchQuote}>
            {category}
          </Button>
        ))}
      </Styled.ButtonsWrapper>
      <Quote>{quote}</Quote>
    </>
  );
};

export default Main;
