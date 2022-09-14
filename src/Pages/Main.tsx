import styled from "styled-components";
import ArticleList from '../Components/ArticleList/ArticleList'

const Main = () => {

  return (
    <Wrapper>
      <ArticleList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export default Main