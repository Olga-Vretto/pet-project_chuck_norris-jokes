import styled from 'styled-components';

export const ButtonStyled = {
    Button: styled.button`
    font-size: 24px;
    font-weight: 600;
    color: rgba(1, 1, 1, 0.9);
    border: 1px solid grey;
    border-radius: 10px;
    padding: 18px 50px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      box-shadow: white 4px 4px 4px;
    }
    &:active {
      transform: scale(0.99);
      font-size: 21px;
    }
  `
}