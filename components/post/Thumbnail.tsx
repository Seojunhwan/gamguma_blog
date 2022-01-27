import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: relative;
`;

interface IProps {
  src: string;
}

export default function Thumbnail({ src }: IProps) {
  return (
    <Container>
      <Image
        src={src}
        objectFit='contain'
        objectPosition='center center'
        layout='responsive'
        alt='post-thumbnail'
        width={1200}
        height={600}
      />
    </Container>
  );
}
