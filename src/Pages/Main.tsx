import styled from "styled-components";
import { useSelector } from 'react-redux';
import ArticleList from '../Components/ArticleList/ArticleList'
import Favorite from '../Components/Favorite/Favorite'
import { currentComponent } from '../data/manager'

const Main = () => {
  const current = useSelector(currentComponent);

  return (
    <Wrapper>
      {current === "search" ? <ArticleList /> : <Favorite />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export default Main