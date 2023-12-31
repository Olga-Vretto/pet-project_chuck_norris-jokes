import styled from 'styled-components';

export const ButtonStyled = {
  Button: styled.button`
    font-size: 20px;
    font-weight: 600;
    color: rgba(1, 1, 1, 0.9);
    border: 1px solid grey;
    border-radius: 10px;
    padding: 14px 40px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: white 4px 4px 4px;
    }
  `,
};
