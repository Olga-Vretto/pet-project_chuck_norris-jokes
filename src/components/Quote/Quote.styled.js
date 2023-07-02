import styled from 'styled-components';

export const QuoteStyled = {
  Wrapper: styled.div`
  display: flex;
  justify-content:${({justifyContent}) => justifyContent ? 'space-between' : 'center'};
  align-items: center;
  gap: 30px;
    background-color: white;
    padding: 30px;
    border: 1px solid black;
    border-radius: 9px;
    width: 1200px;
    margin: 100px auto 0px;
  `,
  Image: styled.img`
    width: 18px;
    height: 20px;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
      transform: scale(1.2);
    }
  `,
  Text: styled.p`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: black;
  `,
};
