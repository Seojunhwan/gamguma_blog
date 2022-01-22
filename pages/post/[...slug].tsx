import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Seo from '../../components/Seo';
import { getAllPost, getPost } from '../../utils/mdxUtils';
import styled from 'styled-components';
import { openColor } from '../../styles/open-color';
import media from '../../styles/media';
import HashTag from '../../components/HashTag';
import { dateFormatter } from '../../utils/utils';
import Toc from '../../components/post/Toc';
import Comments from '../../components/comment/Comments';
import { IFrontMatter } from '../../common/types';

interface IMdxProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: IFrontMatter;
  content: string;
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
      border-bottom: 1px solid ${openColor.white};
    }
    th,
    td {
      padding: 0.5rem;
    }
    td + td,
    th + th {
      border-left: 1px solid ${openColor.gray7};
    }
  }
  p {
    line-height: 2.5rem;
    word-wrap: break-word;
    color: ${(props) => props.theme.fontColor.contentColor};
  }
  blockquote {
    background-color: ${(props) => props.theme.blockquoteColor};
    border-left: 0.5rem solid ${(props) => props.theme.accentColor};
    padding: 0.8rem;
    margin-bottom: 1rem;
    p {
      margin: 0rem;
    }
  }
  strong {
    font-weight: bold;
  }
  code {
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.fontColor.contentColor};
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  }
  h1 {
    padding-bottom: 2rem;
    border-bottom: 1px solid black;
  }
  h1,
  h2,
  h3 {
    font-weight: bold;
  }
  a {
    color: ${openColor.blue7};
    text-decoration: underline;
  }
  ul,
  ol {
    margin: 2rem 0rem;
    font-size: 1.6rem;
    li {
      margin: 0.8rem 0rem;
      padding-left: 1.5rem;
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
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
    li,
    li p {
      font-size: 1.4rem;
    }
    pre {
      font-size: 1.5rem;
      table {
        font-size: 1.4rem;
        line-height: 2rem;
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
    li,
    li p {
      font-size: 1.6rem;
    }
    pre {
      font-size: 1.7rem;
      table {
        font-size: 1.6rem;
        line-height: 2rem;
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
    li,
    li p {
      font-size: 1.6rem;
    }
    pre {
      font-size: 1.9rem;
      table {
        font-size: 1.8rem;
        line-height: 3rem;
      }
    }
  }
`;

const PostHeader = styled.header`
  margin-bottom: 2.5rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0rem;
    h1 {
      font-size: 3.5rem;
      margin-bottom: 2.5rem;
    }
    time {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;

export default function Blog({
  mdxSource,
  frontMatter: { title, description, hashTags, createAt },
  content,
}: IMdxProps) {
  return (
    <>
      <Seo title={title} description={description} keywords={hashTags} />
      <article>
        <Toc content={content} />
        <PostHeader>
          <div>
            <h1>{title}</h1>
            <time dateTime={createAt}>{dateFormatter(createAt)}</time>
            <HashTag isHashTagMenu={false} hashTags={hashTags} />
          </div>
        </PostHeader>
        <PostContainer>
          <div>
            <MDXRemote {...mdxSource} />
          </div>
        </PostContainer>
      </article>
      <Comments />
    </>
  );
}

interface IGetStaticProps {
  params: {
    slug: [];
  };
}

export async function getStaticProps({ params }: IGetStaticProps) {
  const { mdxSource, data, content } = await getPost(params.slug);
  return {
    props: {
      mdxSource,
      frontMatter: data,
      content,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPost().map((post) => {
    return {
      params: {
        slug: post.slug.split('/'),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
