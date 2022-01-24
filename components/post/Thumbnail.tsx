import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: relative;
`;

interface IProps {
  src: string;
  height: string;
}

export default function Thumbnail({ src, height }: IProps) {
  return (
    <Container>
      <Image
        src={src}
        objectFit='contain'
        objectPosition='center center'
        layout='responsive'
        alt='post-thumbnail'
        height={600}
        width={1200}
      />
    </Container>
  );
}
