import React from 'react';
import { AppLayoutStyled as Styled } from './AppLayout.styled';

const AppLayout = ({ children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo></Styled.Logo>
        <Styled.Nav>
            <Styled.Link></Styled.Link>
            <Styled.Link></Styled.Link>
        </Styled.Nav>
      </Styled.Header>
      <main>{children}</main>
      <Styled.Footer>footer</Styled.Footer> 
    </Styled.Wrapper>
  );
};

export default AppLayout;
