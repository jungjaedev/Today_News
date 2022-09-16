import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { selectedArticle } from '../../data/article/index';


const Detail = () => {
  const article = useSelector(selectedArticle);
  // author description, publishedAt, title, urlToImage
  return (
    <Wrapper>
      <Top>
        <Image src={article.urlToImage} />
        <MainText>
          <Title>{article.title}</Title>
          <ArticleInfo>
            <Author>{article.author}</Author>
            <PublishedAt>{article.publishedAt}</PublishedAt>
          </ArticleInfo>
        </MainText>
      </Top>
      <Content>{article.description}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  display: flex;
  border: 1px solid black;
`

const Image = styled.img`
  height: 20rem;
  width: 28rem;
`

const Title = styled.div`
  font-size: 3rem;
  line-height: 4rem;
`

const ArticleInfo = styled.div`
`

const MainText = styled.div`
  height: auto;
  padding-left: 2rem;
`

const PublishedAt = styled.div`
  height: 3rem;
  line-height: 3rem;
  font-size: 1.6rem;
`

const Author = styled.div`
  height: 3rem;
  font-size: 1.8rem;
  line-height: 3rem;

`

const Content = styled.div`
  border: 1px solid black;
`

export default Detail;