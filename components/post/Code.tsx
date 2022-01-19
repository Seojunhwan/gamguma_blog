import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import media from '../../styles/media';

const Container = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background-color: #2f3135;
  box-shadow: ${(props) => props.theme.defaultShadow};
  margin: 2rem 0;
`;

const CodeInfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  user-select: none;
  background-color: #15151599;
  span {
    text-transform: uppercase;
    color: #ff8a64;
    font-family: Aggro;
  }
  div:last-child {
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
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0.5rem;
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
  ${media.small} {
    &::-webkit-scrollbar {
      height: 1rem;
    }
  }
`;

const Table = styled.table`
  display: table;
  width: 100%;
  vertical-align: middle;
`;

const LineNo = styled.td`
  user-select: none;
  color: #4a545c;
  text-align: center;
  transition: all 0.05s ease;
  padding-right: 0.5rem;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  & + td {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    padding-right: 1rem;
  }
`;

const Line = styled.tr`
  transition: all 0.05s ease;
  &:hover {
    background-color: #20202099;
    ${LineNo} {
      color: white;
    }
  }
`;

export default function Code({ children, className }: { children: string; className: string }) {
  const language = className ? className.replace(/language-/, '') : '';
  return (
    <Container>
      <CodeInfoBar>
        <span>{language}</span>
        <div>
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
      </CodeInfoBar>
      <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language as any}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <TableWrapper>
            <Table>
              <tbody>
                {tokens.map((line, i) => (
                  <Line key={i} {...getLineProps({ line, key: i })}>
                    <LineNo>{language ? i + 1 : ''}</LineNo>
                    <td>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </td>
                  </Line>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Highlight>
    </Container>
  );
}
