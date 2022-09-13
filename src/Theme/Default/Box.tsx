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
  width: 100%;
  height: auto;
`

export default Box