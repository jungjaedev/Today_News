import { ReactNode } from "react";
import styled from "styled-components";
import Header from './Header';

interface ContainerProps {
  children?: ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return (
    <Constainer>
      <Header />
      <Body>
        {children}
      </Body>
    </Constainer>
  )
}

const Constainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Body = styled.div`
  padding-top: 16px;
  padding-bottom: 20px;
  background-color: yellow;
`


export default Container;