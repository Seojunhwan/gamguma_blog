import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 10rem 1rem 5rem 1rem;
`;

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
