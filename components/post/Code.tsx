import { memo as ReactMemo } from 'react';
import styled from 'styled-components';
import type { Language } from 'prism-react-renderer';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import media from '../../styles/media';

interface IProps {
  children: string;
  className: string;
}

function Code({ children, className }: IProps) {
  const language = className ? className.replace(/language-/, '') : '';

  return (
    <Container>
      <span style={{ display: 'block', backgroundColor: 'beige', padding: '1rem 2rem' }}>
        code component 수정 중,, 양해 바랍니닷,,
      </span>
      <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language as Language}>
        {({ tokens, getLineProps, getTokenProps }) => (
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

export default ReactMemo(Code);

const Container = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background-color: #2f3135;
  box-shadow: ${({ theme }) => theme.shadow.defaultShadow};
  margin: 2rem 0;
  ${media.medium} {
    margin: 2rem -5rem;
  }
  font-family: NaverD2, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1.5rem 0.5rem;
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
  min-width: 5rem;
  & + td {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    padding-right: 1rem;
  }
`;

const Line = styled.tr`
  transition: all 0.05s ease;
  line-height: 1.5;
  &:hover {
    background-color: #20202099;
    ${LineNo} {
      color: white;
    }
  }
`;
