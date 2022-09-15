import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { updateCurrentComponentAction, updateIsSearchAction } from '../data/manager';
import { updateSearchValue } from '../data/article';
import Modal from "../Components/Modal/Modal";
import Portal from "../Components/Modal/Portal";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false)
  const handleMoveHome = () => {
    navigate("/");
    dispatch(updateCurrentComponentAction("search"));
    dispatch(updateIsSearchAction(false));
    dispatch(updateSearchValue(''));
  };

  const handleFavorite = () => {
    dispatch(updateCurrentComponentAction("favorite"))
    console.log('즐찾');
  }

  const handleLogin = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <>
      {modal && (
        <Portal selector='#modal'>
          <Modal handleModal={closeModal} />
        </Portal>
      )}
      <Wrapper>
        <LogoWrapper>
          <Logo src={require("../assets/header-logo.png")} onClick={handleMoveHome} />
        </LogoWrapper>
        <Buttons>
          <Button onClick={handleFavorite}>즐겨찾기</Button>
          <Button onClick={handleLogin}>로그인</Button>
        </Buttons>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 5rem;
  margin: 1rem 0 2rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
`

const Logo = styled.img`
  /* width: 12rem;
  height: 6rem; */
  cursor: pointer;
`;

const Buttons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 0;
  padding: 0.5rem;
`

const Button = styled.div`
  margin: 1rem;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }
`

export default Header;