import { Button, Seo, TypeWriter } from '@components/common';
import { media } from '@styles';
import Head from 'next/head';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

export default function About() {
  const content = `안녕하세요!\n프론트엔드 엔지니어 서준환입니다!`;
  const styledContent = (
    <>
      안녕하세요!
      <br />
      프론트엔드 엔지니어 <AccentWord>서준환</AccentWord>입니다!
    </>
  );
  const openPortfolioPage = () => alert('포트폴리오 사이트 제작 중');
  const openGithubPage = () => window.open('https://github.com/Seojunhwan', '_blank');
  return (
    <>
      <Seo
        title='About'
        description='프론트엔드 엔지니어 서준환 | 감구마'
        keywords={['프론트엔드', '서준환', '감구마', 'gamguma']}
        thumbnail='/images/og_about.png'
      />
      <Head>
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_SITE_URL}/about`} />
      </Head>
      <Container>
        <Profile>
          <InfoContainer>
            <TypeWriterWrapper>
              <StyledTypeWriter content={content} styledContent={styledContent} speed={200} waitTime={3000} />
            </TypeWriterWrapper>
            <Info>
              <InfoItem>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    version='1.1'
                    stroke='currentColor'
                    x='0px'
                    y='0px'
                    viewBox='0 0 32 32'
                    enableBackground='new 0 0 32 32'
                    xmlSpace='preserve'
                  >
                    <circle
                      cx='16'
                      cy='16'
                      r='14'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                    />
                    <circle
                      cx='16'
                      cy='13'
                      r='5'
                      fill='none'
                      strokeWidth='2'
                      strokeLinejoin='round'
                      strokeMiterlimit='10'
                    />
                    <path
                      d='M5.4,25.1c1.8-4.1,5.8-7,10.6-7c4.8,0,8.9,2.9,10.6,7'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeMiterlimit='10'
                      strokeWidth='2'
                    />
                  </svg>
                </span>
                <InfoField>
                  <span>이름</span>
                  <span>서준환</span>
                </InfoField>
              </InfoItem>
              <InfoItem>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
                    <line x1='16' y1='2' x2='16' y2='6' />
                    <line x1='8' y1='2' x2='8' y2='6' />
                    <line x1='3' y1='10' x2='21' y2='10' />
                  </svg>
                </span>
                <InfoField>
                  <span>생년월일</span>
                  <span>1999.09.01</span>
                </InfoField>
              </InfoItem>
              <InfoItem>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    enableBackground='new 0 0 32 32'
                    version='1.1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 32 32'
                    xmlSpace='preserve'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinejoin='round'
                    strokeMiterlimit='10'
                  >
                    <path d='M25,13c0,8-9,15-9,15s-9-7-9-15c0-5,4-9,9-9S25,8,25,13z' />
                    <circle cx='16' cy='13' r='3' />
                  </svg>
                </span>
                <InfoField>
                  <span>주소</span>
                  <span>서울특별시 & 광주광역시</span>
                </InfoField>
              </InfoItem>
              <InfoItem>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                    <polyline points='22,6 12,13 2,6' />
                  </svg>
                </span>
                <InfoField>
                  <span>이메일</span>
                  <a href='mailto:sjunhwan0901@gmail.com'>sjunhwan0901@gmail.com</a>
                </InfoField>
              </InfoItem>
              <InfoItem>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' stroke='currentColor' viewBox='0 0 32 32'>
                    <g>
                      <path d='M21,2H11A5,5,0,0,0,6,7V25a5,5,0,0,0,5,5H21a5,5,0,0,0,5-5V7A5,5,0,0,0,21,2ZM19,4a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1Zm5,21a3,3,0,0,1-3,3H11a3,3,0,0,1-3-3V7a3,3,0,0,1,3-3,3,3,0,0,0,3,3h4a3,3,0,0,0,3-3,3,3,0,0,1,3,3Z' />
                      <path d='M17,25H15a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' />
                    </g>
                  </svg>
                </span>
                <InfoField>
                  <span>연락처</span>
                  <a href='tel:01096300760'>010-9630-0760</a>
                </InfoField>
              </InfoItem>
              <InfoItem>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 32 32'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeMiterlimit='10'
                  >
                    <path d='M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z' />
                    <rect x='7' y='13' width='4' height='12' />
                    <path d='M20.5,13c-0.9,0-1.8,0.3-2.5,0.8V13h-4v12h2h2v-6.5c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5V25h4v-7.5  C25,15,23,13,20.5,13z' />
                    <circle cx='9' cy='8' r='2' />
                  </svg>
                </span>
                <InfoField>
                  <span>링크드인</span>
                  <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/seojunhwan'>
                    Junhwan Seo
                  </a>
                </InfoField>
              </InfoItem>
            </Info>
            <ButtonContainer>
              <StyledButton
                size='large'
                color='yellow5'
                type='button'
                onClick={openPortfolioPage}
                outline
                fullWidth
              >
                포트폴리오 사이트 제작 중
              </StyledButton>
              <StyledButton
                size='large'
                color='gray7'
                type='button'
                outline
                fullWidth
                onClick={openGithubPage}
              >
                깃허브 보러가기
              </StyledButton>
            </ButtonContainer>
          </InfoContainer>
          <ProfileImageWrapper>
            <ProfileImage>
              <Image
                src='/images/profile.png'
                alt='profile'
                width={3024}
                height={3024}
                layout='responsive'
                objectFit='cover'
                priority
              />
            </ProfileImage>
          </ProfileImageWrapper>
        </Profile>
      </Container>
    </>
  );
}

const AccentAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  ${media.medium} {
    margin-top: 15rem;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  ${media.medium} {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProfileImage = styled.div`
  border-radius: 100%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const ProfileImageWrapper = styled.div`
  width: 30%;
  margin-bottom: 2rem;
  ${media.medium} {
    width: 50%;
    margin-bottom: 0rem;
  }
`;

const AccentWord = styled.span`
  display: inline-block;
  &:after {
    content: '';
    height: 5px;
    display: block;
    background-color: ${({ theme }) => theme.headerColor};
    border-radius: 0.1rem;
    transform: translateY(-1.3rem);
    animation: ${AccentAnimation} 1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
`;

const TypeWriterWrapper = styled.div`
  width: 100%;
  ${media.medium} {
    margin-left: 17rem;
  }
`;

const StyledTypeWriter = styled(TypeWriter)`
  height: 14rem;
  font-family: Roboto, GmarketSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 6rem;
  text-align: center;
  ${media.small} {
    font-size: 2.6rem;
  }
  ${media.medium} {
    text-align: left;
    font-size: 3rem;
  }
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin-bottom: 4rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  & > span {
    width: 3rem;
    margin-right: 0.5rem;
    ${media.small} {
      margin-right: 1.5rem;
    }
  }
`;

const InfoField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    ${media.medium} {
      font-size: 1.6rem;
    }
  }
  span + * {
    font-size: 1.1rem;
    ${media.medium} {
      font-size: 1.4rem;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  ${media.small} {
    padding: 0;
    width: 80%;
    min-width: fit-content;
    flex-direction: row;
  }
`;

const StyledButton = styled(Button)`
  font-size: 1.4rem;
  ${media.small} {
    font-size: 1.7rem;
  }
  & + & {
    margin-top: 2rem;
    ${media.small} {
      margin-top: 0;
      margin-left: 1rem;
    }
  }
`;
