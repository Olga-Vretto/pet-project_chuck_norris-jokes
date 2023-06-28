import React from 'react';
import { AppLayoutStyled as Styled } from './AppLayout.styled';
import logo from '../../assets/images/logo.png';
import { ROUTES } from '../../constants/routes';

const AppLayout = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo src={logo} alt='logo' />
        <Styled.Nav>
          <Styled.Link to={ROUTES.main}  fontSize={26} >Main</Styled.Link>
          <Styled.Link to={ROUTES.favorite}  fontSize={26} >Favorite</Styled.Link>
        </Styled.Nav>
      </Styled.Header>
      <main>{children}</main>
      <Styled.Footer>
        <Styled.Link to ='https://api.chucknorris.io/' fontSize={18} fontWeight="true">Go to Chuck Norris API</Styled.Link>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
export default AppLayout;
