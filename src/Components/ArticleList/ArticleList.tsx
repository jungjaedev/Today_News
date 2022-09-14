import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import ArticleItem from './ArticleItem'
import { getArticleListFuction, selectedFilter, searchValue, articleList } from '../../data/article';
import { currentComponent } from '../../data/manager'


interface articleDataProps {
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(articleList);

  useEffect(() => {
    dispatch(getArticleListFuction() as any)
  }, [])

  return (
    <Wrapper>
      <div>한국 헤드라인</div>
      {articles ? 
      articles.map((article : articleDataProps) => {
        return (
          <ArticleItem key={article.title} article={article} />
        )
    }) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`


export default ArticleList