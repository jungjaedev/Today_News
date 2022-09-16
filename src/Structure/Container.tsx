import { ReactNode } from "react";
import styled from "styled-components";
import Header from './Header';
import SearchBar from './SearchBar';

interface ContainerProps {
  children?: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <Wrapper>
      <Header />
      <SearchBar />
      <Body>
        {children}
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`

const Body = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 20px;
  align-self: center;
  height: calc(100vh - 10rem);
`

export default Container;