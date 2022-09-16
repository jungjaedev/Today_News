import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateCurrentComponentAction } from "../../data/manager"



const BackButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateCurrentComponentAction("favorite"));
  }
  return (
    <Wrapper onClick={handleClick}>즐겨찾기 목록으로</Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  padding: 1rem 2rem 1rem 0.5rem;
  left: 0;

  &:hover {
    cursor: pointer;
  }
`



export default BackButton;