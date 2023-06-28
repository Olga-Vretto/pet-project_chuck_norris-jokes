import React from 'react';
import { AppLayoutStyled as Styled } from './AppLayout.styled';
import logo from '../../assets/images/logo.png';
import { ROUTES } from '../../constants/routes';

const AppLayout = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo src={logo} />
        <Styled.Nav>
          <Styled.Link to={ROUTES.main}>Main</Styled.Link>
          <Styled.Link to={ROUTES.favorite}>Favorite</Styled.Link>
        </Styled.Nav>
      </Styled.Header>
      <main>{children}</main>
      <Styled.Footer>
        <Styled.Email href='https://api.chucknorris.io/'>Go to Chuck Norris API</Styled.Email>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
export default AppLayout;
