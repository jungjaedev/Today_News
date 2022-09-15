import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import ArticleItem from './ArticleItem'
import { getArticleListFuction, resultnum, articleList } from '../../data/article';
import { isSearch } from '../../data/manager';


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
  const onSearch = useSelector(isSearch);
  const result = useSelector(resultnum);

  useEffect(() => {
    dispatch(getArticleListFuction() as any)
  }, [dispatch, onSearch])
  
  const value = onSearch ? `총 ${result}개의 검색결과` : `US Top Headline`
  return (
    <Wrapper>
      <ResultCount>{value}</ResultCount>
      {articles ? 
      articles.map((article : articleDataProps, idx : number) => {
        return (
          <ArticleItem key={idx} article={article} />
        )
    }) : null}
    </Wrapper>
  )
}

const ResultCount = styled.div`
  margin-left: 1rem;
  font-weight: 400;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`


export default ArticleList