import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 1rem 1rem 5rem 1rem;
`;

const Main = styled.main`
  margin-top: 7rem;
  width: 100%;
`;

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </>
  );
}
