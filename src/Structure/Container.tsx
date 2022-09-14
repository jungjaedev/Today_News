import { ReactNode } from "react";
import styled from "styled-components";
import Header from './Header';
import SearchBar from './SearchBar';

interface ContainerProps {
  children?: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <Constainer>
      <Header />
      <SearchBar />
      <Body>
        {children}
      </Body>
    </Constainer>
  )
}

const Constainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`

const Body = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 20px;
  background-color: yellow;
`

export default Container;