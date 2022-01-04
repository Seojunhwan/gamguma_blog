import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: fixed;
  width: 100%;
  z-index: 99;
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  span {
    font-size: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <span>감구마 Dev-blog {new Date().getFullYear()} &copy;</span>
      </Container>
    </FooterWrapper>
  );
}
