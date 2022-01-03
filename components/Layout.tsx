import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0px 10px;
`;

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
}
