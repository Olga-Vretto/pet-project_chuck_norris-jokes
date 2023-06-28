import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppLayoutStyled = {
  Wrapper: styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: black;
    opacity: 0.8;

    padding: 20px 50px;
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,

  Logo: styled.img`
    width: 100px;
  `,
  Nav: styled.nav`
    display: flex;
    gap: 40px;
  `,
  Link: styled(Link)`
    font-size: 26px;
    font-weight: 700;
    color: white;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      border-bottom: 2px solid white;
    }
  `,
  Footer: styled.footer``,
  Email: styled.a`
  color: white;
  `,
};
