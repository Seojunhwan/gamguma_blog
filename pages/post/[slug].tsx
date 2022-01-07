import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Seo from '../../components/Seo';
import { IFrontMatter } from '..';
import { loadPost, postFilePaths } from '../../utils/mdxUtils';
import styled from 'styled-components';
import { openColor } from '../../styles/open-color';
import media from '../../styles/media';

interface IMdxProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
}

const PostContainer = styled.div`
  table:not(pre table) {
    table-layout: auto;
    text-align: left;
    margin-bottom: 2.8rem;
    min-width: 40%;
    max-width: 100%;
    border: 1px solid ${openColor.gray7};
    font-size: 1.5rem;
    overflow: auto;
    thead > tr > th {
      /* text-align: left; */
      border-bottom: 1px solid ${openColor.white};
    }
    th,
    td {
      /* word-break: break-word; */
      padding: 0.5rem;
    }
    td + td,
    th + th {
      border-left: 1px solid ${openColor.gray7};
    }
    tr:nth-of-type(even) {
      /* background: ${openColor.gray1}; */
    }
    tr:nth-of-type(odd) {
      /* background: ${openColor.white}; */
    }
  }
  p {
    line-height: 2.5rem;
    word-wrap: break-word;
    color: #bcbcbc;
    code {
      background-color: ${openColor.gray7};
      color: ${openColor.red7};
      border-radius: 0.5rem;
      padding: 0 0.5rem;
    }
  }
  a {
    color: ${openColor.blue7};
    text-decoration: underline;
  }
  ul {
    margin: 2rem 0rem;
    font-size: 1.6rem;
  }
  li {
    color: #bcbcbc;
    margin: 0.8rem 0rem;
    padding-left: 1rem;
    position: relative;
    line-height: 2.5rem;
    &::before {
      content: ' ';
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.25rem;
      background-color: #bcbcbf99;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0.25rem;
      margin: auto 0;
    }
  }
  ${media.xsmall} {
    h1 {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 2rem;
      margin-top: 4.8rem;
      margin-bottom: 2.4rem;
    }
    h3 {
      font-size: 1.8rem;
      margin-top: 3.2rem;
      margin-bottom: 1.2rem;
    }
    h4 {
      margin: 1.6rem 0;
      font-size: 1.6rem;
    }
    h5 {
      margin: 1.4rem 0;
      font-size: 1.4rem;
    }
    h6 {
      margin: 1.3rem 0;
      font-size: 1.3rem;
    }
    p {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
    li {
      font-size: 1.6rem;
    }
    pre {
      font-size: 1.3rem;
      code {
        &.language-null {
          font-size: 1.3rem;
        }
      }
    }
  }
  ${media.small} {
    h1 {
      font-size: 2.8rem;
    }
    h2 {
      font-size: 2.4rem;
      margin-top: 4.8rem;
      margin-bottom: 2.4rem;
    }
    h3 {
      font-size: 2rem;
      margin-top: 3.2rem;
      margin-bottom: 1.2rem;
    }
    h4 {
      margin: 1.6rem 0;
      font-size: 1.8rem;
    }
    h5 {
      margin: 1.6rem 0;
      font-size: 1.6rem;
    }
    h6 {
      margin: 1.5rem 0;
      font-size: 1.5rem;
    }
    p {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
    li {
      font-size: 1.8rem;
    }
    pre {
      font-size: 1.5rem;
      code {
        &.language-null {
          font-size: 1.5rem;
        }
      }
    }
  }
  ${media.medium} {
    h1 {
      font-size: 3.6rem;
    }
    h2 {
      font-size: 2.4rem;
      margin-top: 4.8rem;
      margin-bottom: 2.4rem;
    }
    h3 {
      font-size: 2rem;
      margin-top: 3.2rem;
      margin-bottom: 1.2rem;
    }
    h4 {
      margin: 1.6rem 0;
      font-size: 1.6rem;
    }
    h5 {
      margin: 1.6rem 0;
      font-size: 1.5rem;
    }
    h6 {
      margin: 1.6rem 0;
      font-size: 1.4rem;
    }
    p {
      font-size: 1.8rem;
    }
    li {
      font-size: 1.6rem;
    }
  }
  pre {
    font-size: 1.5rem;
    code {
      &.language-null {
        font-size: 1.5rem;
      }
    }
  }
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    border-bottom: 1px solid black;
    h1 {
      font-size: 3.5rem;
    }
    time {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  }
`;

export default function Blog({
  mdxSource,
  frontMatter: { title, description, hashTags, createAt },
}: IMdxProps) {
  return (
    <>
      <Seo title={title} description={description} keywords={hashTags} />
      <article>
        <PostHeader>
          <div>
            <time dateTime={createAt}>{createAt}</time>
            <h1>{title}</h1>
          </div>
        </PostHeader>
        <PostContainer>
          <div className='markdown-body'>
            <MDXRemote {...mdxSource} />
          </div>
        </PostContainer>
      </article>
    </>
  );
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const { mdxSource, data } = await loadPost(slug);
  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
