import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const CodeWrapper = styled.code`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  max-width: 70rem;
  margin: 0 auto;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  border-radius: 1.5rem;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &::-webkit-scrollbar {
    height: 1.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 1rem;
  }
`;

const LineNo = styled.span`
  margin-right: 1rem;
  color: #4a545c;
  transition: all 0.05s ease;
  user-select: none;
`;

const Line = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.05s ease;
  &:hover {
    background-color: #20202099;
    ${LineNo} {
      color: white;
    }
  }
`;

const CodeInfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  margin-bottom: 0.5rem;
  user-select: none;
  background-color: #15151599;
  span {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #ff8a64;
    font-family: Aggro;
  }
  div {
    &:last-child {
      display: flex;
      gap: 0.3rem;
      span {
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
        background-color: #ffbd2d;
        &:first-child {
          background-color: #fe5f57;
        }
        &:last-child {
          background-color: #29c941;
        }
      }
    }
  }
`;

export default function Code({ children, className }: { children: string; className: string }) {
  const language = className.replace(/language-/, '');
  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeWrapper className={className}>
          <CodeInfoBar>
            <span>{language}</span>
            <div>
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
          </CodeInfoBar>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </Line>
          ))}
        </CodeWrapper>
      )}
    </Highlight>
  );
}
