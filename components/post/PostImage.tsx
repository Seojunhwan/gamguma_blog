import Image from 'next/image';
import styled from 'styled-components';
import media from '../../styles/media';

const Container = styled.div<{ height?: number }>`
  position: relative;
  display: block;
  height: ${(props) => (props.height ? 'auto' : '20rem')};
  ${media.small} {
    height: ${(props) => (props.height ? 'auto' : '25rem')};
  }
  ${media.medium} {
    height: ${(props) => (props.height ? 'auto' : '30rem')};
  }
`;

interface IProps {
  src: string;
  width?: number;
  height?: number;
}

export default function PostImage({ src, width, height }: IProps) {
  return (
    <Container height={height}>
      <Image
        src={src}
        objectFit='contain'
        objectPosition='center center'
        alt='postImage'
        layout={width && height ? 'responsive' : 'fill'}
        width={width}
        height={height}
      />
    </Container>
  );
}
