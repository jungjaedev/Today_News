import React from 'react'
import styled from "styled-components";
import { useSelector } from "react-redux";
import { currentComponent } from "../../data/manager"

const ArticleItem = ({ article }: any ) => {
  const current = useSelector(currentComponent)

  const handleOpenNewTab = () => {
    window.open(`${article.url}`,'_black')
  }

  const handleFavorite = () => {
    console.log('favorite');
  }

  const handleEdit = () => {
    console.log('edit');
  }

  return (
    <Wrapper>
      <ThumbNailWrapper>
        <ThumbNail onClick={handleOpenNewTab} src={article.urlToImage === null ? require("../../assets/no_image.png") : article.urlToImage } alt="thumbNail" />
      </ThumbNailWrapper>
      <MainText>
        <Title onClick={handleOpenNewTab}>{article.title}</Title>
        <Content onClick={handleOpenNewTab}>{article.content === null ? article.description : article.content.slice(0,-14)}</Content>
        {/* <Content onClick={handleOpenNewTab}>{article.description}</Content> */}
        <Footer>
          <ContentInfo>
            <Author>{article.author}</Author>
            <Date>{article.publishedAt.replace(/[T, Z]/g,' ')}</Date>
          </ContentInfo>
          <ToolButtons>
            {current === "favorite" ? <Editicon onClick={handleEdit} src={require("../../assets/edit.png")} /> : null}
            <FavoriteIcon onClick={handleFavorite} src={require("../../assets/favoriteEmpty.png")} />
          </ToolButtons>
        </Footer>
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
  width: 15rem;
  &:hover {
    cursor: pointer;
  }
`
const MainText = styled.div`
  display:flex;
  flex-direction: column;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-weight: 500;
  justify-content: space-between;
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
  margin-right: 0.5rem;
`

const Date = styled.div`
`

const ToolButtons = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const FavoriteIcon = styled.img`
  width: 1.5rem;
`

const Editicon = styled.img`
  width: 1.5rem;
  margin: 0 1rem;
`

const ContentInfo = styled.div`
  display:flex;
  font-size: 0.9rem;
`
export default ArticleItem