import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from "styled-components";
import ArticleItem from './ArticleItem'
import { getArticleListFuction, resultNum, articleList, isLoading, updateIsLoadingAction, updateFavoriteArticleListAction, favoriteArticleList } from '../../data/article';
// import { getArticleListFuction } from '../../lib/articelList';
import { currentComponent, isSearch } from '../../data/manager';
import { articleDataProps } from '../../type/article'
import { getFavoriteArticleList } from '../../lib/local-storage';

const ArticleList = () => {
  const dispatch = useDispatch();
  let articles = useSelector(articleList);
  const onSearch = useSelector(isSearch);
  const result = useSelector(resultNum);
  const loadingCheck = useSelector(isLoading);
  const current = useSelector(currentComponent);
  
  useEffect(() => {
    dispatch(getArticleListFuction() as any);
    dispatch(updateIsLoadingAction(true));
    const favoriteList = getFavoriteArticleList('favorite');
    dispatch(updateFavoriteArticleListAction(favoriteList));
  }, [dispatch, onSearch ])
  articles = articles ? articles : [];
  const value = loadingCheck
    ? null
    : onSearch
      ? `총 ${result}개의 검색결과`
      : current === "favorite"
        ? `총 ${articles.length}개의 즐겨찾기`
        : `US Top Headline`
  const listMap = articles.map((article : articleDataProps, idx : number) => {
    return (
      <ArticleItem key={idx} article={article} />
    )
  })
  const list = (articles && !loadingCheck) ? listMap : null;
  return (
    <Wrapper>
      {loadingCheck ? <LoadSpinner />: null}
      <ResultCount>{value}</ResultCount>
      {list}
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

const spin = keyframes`
0%,
100% {
  box-shadow: 0em -2.6em 0em 0em #db2929,
    1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2),
    2.5em 0em 0 0em rgba(219, 41, 41, 0.2),
    1.75em 1.75em 0 0em rgba(219, 41, 41, 0.2),
    0em 2.5em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em 1.8em 0 0em rgba(219, 41, 41, 0.2),
    -2.6em 0em 0 0em rgba(219, 41, 41, 0.5),
    -1.8em -1.8em 0 0em rgba(219, 41, 41, 0.7);
}
12.5% {
  box-shadow: 0em -2.6em 0em 0em rgba(219, 41, 41, 0.7),
    1.8em -1.8em 0 0em #db2929, 2.5em 0em 0 0em rgba(219, 41, 41, 0.2),
    1.75em 1.75em 0 0em rgba(219, 41, 41, 0.2),
    0em 2.5em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em 1.8em 0 0em rgba(219, 41, 41, 0.2),
    -2.6em 0em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em -1.8em 0 0em rgba(219, 41, 41, 0.5);
}
25% {
  box-shadow: 0em -2.6em 0em 0em rgba(219, 41, 41, 0.5),
    1.8em -1.8em 0 0em rgba(219, 41, 41, 0.7), 2.5em 0em 0 0em #db2929,
    1.75em 1.75em 0 0em rgba(219, 41, 41, 0.2),
    0em 2.5em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em 1.8em 0 0em rgba(219, 41, 41, 0.2),
    -2.6em 0em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2);
}
37.5% {
  box-shadow: 0em -2.6em 0em 0em rgba(219, 41, 41, 0.2),
    1.8em -1.8em 0 0em rgba(219, 41, 41, 0.5),
    2.5em 0em 0 0em rgba(219, 41, 41, 0.7), 1.75em 1.75em 0 0em #db2929,
    0em 2.5em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em 1.8em 0 0em rgba(219, 41, 41, 0.2),
    -2.6em 0em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2);
}
50% {
  box-shadow: 0em -2.6em 0em 0em rgba(219, 41, 41, 0.2),
    1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2),
    2.5em 0em 0 0em rgba(219, 41, 41, 0.5),
    1.75em 1.75em 0 0em rgba(219, 41, 41, 0.7), 0em 2.5em 0 0em #db2929,
    -1.8em 1.8em 0 0em rgba(219, 41, 41, 0.2),
    -2.6em 0em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2);
}
62.5% {
  box-shadow: 0em -2.6em 0em 0em rgba(219, 41, 41, 0.2),
    1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2),
    2.5em 0em 0 0em rgba(219, 41, 41, 0.2),
    1.75em 1.75em 0 0em rgba(219, 41, 41, 0.5),
    0em 2.5em 0 0em rgba(219, 41, 41, 0.7), -1.8em 1.8em 0 0em #db2929,
    -2.6em 0em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2);
}
75% {
  box-shadow: 0em -2.6em 0em 0em rgba(219, 41, 41, 0.2),
    1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2),
    2.5em 0em 0 0em rgba(219, 41, 41, 0.2),
    1.75em 1.75em 0 0em rgba(219, 41, 41, 0.2),
    0em 2.5em 0 0em rgba(219, 41, 41, 0.5),
    -1.8em 1.8em 0 0em rgba(219, 41, 41, 0.7), -2.6em 0em 0 0em #db2929,
    -1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2);
}
87.5% {
  box-shadow: 0em -2.6em 0em 0em rgba(219, 41, 41, 0.2),
    1.8em -1.8em 0 0em rgba(219, 41, 41, 0.2),
    2.5em 0em 0 0em rgba(219, 41, 41, 0.2),
    1.75em 1.75em 0 0em rgba(219, 41, 41, 0.2),
    0em 2.5em 0 0em rgba(219, 41, 41, 0.2),
    -1.8em 1.8em 0 0em rgba(219, 41, 41, 0.5),
    -2.6em 0em 0 0em rgba(219, 41, 41, 0.7), -1.8em -1.8em 0 0em #db2929;
}
`;

const LoadSpinner = styled.div`
  margin: 100px auto;
  font-size: 15px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${spin} 1.1s infinite ease;
  transform: translateZ(0);
`;

export default ArticleList