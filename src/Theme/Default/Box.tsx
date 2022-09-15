import styled from "styled-components";
import { ReactNode } from "react";


interface BoxProps {
  children?: ReactNode;
  onClick? : () => void;
}


const Box = ({children, onClick} : BoxProps ) => {
  return (
    <Wrapper onClick={onClick}>{children}</Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
`

export default Box