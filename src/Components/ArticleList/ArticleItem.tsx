import React from 'react'
import styled from "styled-components";

const ArticleItem = ({ article }: any ) => {
  const handleClick = () => {
    window.open(`${article.url}`,'_black')
  }

  return (
    <Wrapper>
      <ThumbNailWrapper>
        <ThumbNail onClick={handleClick} src={article.urlToImage} alt="thumbNail" />
      </ThumbNailWrapper>
      <MainText>
        <Title onClick={handleClick}>{article.title}</Title>
        <Content onClick={handleClick}>{article.content.slice(0,-14)}</Content>
        <ContentInfo>
          <Author>{article.author}</Author>
          <Date>{article.publishedAt.replace(/[T, Z]/g,' ')}</Date>
        </ContentInfo>
      </MainText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 1rem;
  max-width: 1000px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  padding: 1rem;
`

const ThumbNailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const ThumbNail = styled.img`
  height: 10rem;

  &:hover {
    cursor: pointer;
  }
`
const MainText = styled.div`
  display:flex;
  flex-direction: column;
`

const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-weight: 500;
`

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`

const Content = styled.div`
  font-size: 1.15rem;
  margin: 0.5rem 0;
  color : ${({ theme }) => theme.grey};
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`

const Author = styled.div`
  color:  ${({ theme }) => theme.lightBlue};
`

const Date = styled.div`
  margin-left: 0.5rem;
`


export default ArticleItem