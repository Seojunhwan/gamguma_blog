import styled from 'styled-components';
import Header from './Header';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
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
