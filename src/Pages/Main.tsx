import { useSelector } from 'react-redux';
import styled from "styled-components";
import Detail from '../Components/ArticleDetail.tsx/Detail';
import ArticleList from '../Components/ArticleList/ArticleList';
import ButtonToTop from '../Components/ButtonToTop/ButtonToTop';
import { currentComponent } from '../data/manager';

const Main = () => {
  const current = useSelector(currentComponent)
  return (
    <Wrapper>
      {current === "detail" ? <Detail /> : <ArticleList /> }
      <ButtonToTop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export default Main