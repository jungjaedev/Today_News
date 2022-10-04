import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { currentComponent, updateCurrentComponentAction } from "../../data/manager"
import { setFavoriteArticleList } from '../../lib/local-storage';
import { articleDataProps } from '../../type/article';
import { isLogin } from '../../data/user/index';
import { favoriteArticleList, updateSelectedArticleAction } from '../../data/article';
import { deleteFavoriteArticle } from '../../lib/articelList';

interface ArticleItemProps {
  article: articleDataProps;
}

const ArticleItem = ({ article }: ArticleItemProps ) => {
  const dispatch = useDispatch();
  const [ isOnFavorite, setIsOnFavorite ] = useState(false);
  const current = useSelector(currentComponent);
  const loginCheck = useSelector(isLogin);
  const favoriteList = useSelector(favoriteArticleList);

  useEffect(() => {
    setIsOnFavorite(isFavorite()) 
  }, [current]);
  

  const handleOpenNewTab = () => {
    window.open(`${article.url}`,'_blank')
  }

  const handleFavorite = () => {
    if(loginCheck) {
      if(isOnFavorite) {
        setIsOnFavorite(false);
        deleteFavoriteArticle(article);
      } else {
        setIsOnFavorite(true);
        setFavoriteArticleList(article, "favorite");
      }
    }
  }

  const handleEdit = () => {
    dispatch(updateSelectedArticleAction(article));
    dispatch(updateCurrentComponentAction("detail"));
  }

  const isFavorite = () => {
    if(favoriteList) {
      const articleFound = favoriteList.find((item : articleDataProps ) => item.title === article.title)
      if(articleFound) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  // const splitedTitle = article.title.split('-');
  
  
  // const publishedBy = splitedTitle[splitedTitle.length-1];
  // const articleTitle = splitedTitle.slice(0, -1)


  const favoriteImg = isOnFavorite 
    ? require("../../assets/favorite.png")
    : require("../../assets/favoriteEmpty.png") 

  return (
    <Wrapper>
      <ThumbNailWrapper>
        <ThumbNail onClick={handleOpenNewTab} src={article.urlToImage === null ? require("../../assets/no_image.png") : article.urlToImage } alt="thumbNail" />
      </ThumbNailWrapper>
      <MainText>
        {/* <Title onClick={handleOpenNewTab}>[{publishedBy} ] {articleTitle}</Title> */}
        <Title onClick={handleOpenNewTab}>{article.title}</Title>
        <Content onClick={handleOpenNewTab}>{article.content && article.content.slice(0,-14)}</Content>
        <Footer>
          <ContentInfo>
            <Author>{article.author}</Author>
            <Date>{article.publishedAt && article.publishedAt.replace(/[T, Z]/g,' ')}</Date>
          </ContentInfo>
          <ToolButtons>
            {current === "favorite" && <Editicon onClick={handleEdit} src={require("../../assets/edit.png")} />}
            {loginCheck && <FavoriteIcon onClick={handleFavorite} src={favoriteImg} />}
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