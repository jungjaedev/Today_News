import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { updateCurrentComponentAction, updateIsSearchAction, updateValidationAction } from '../data/manager';
import { getFavoriteListFuction, updateSearchValue, getArticleListFuction } from '../data/article';
import { isLogin } from '../data/user';
import Modal from "../Components/Modal/Modal";
import Portal from "../Components/Modal/Portal";
import { LogoutFunction } from '../lib/validate';
import { getTokenWithExpireTime } from '../lib/local-storage';


const Header = () => {
  const dispatch = useDispatch();
  const loginCheck = useSelector(isLogin);
  const [modal, setModal] = useState(false)
  const handleMoveHome = () => {
    dispatch(updateCurrentComponentAction("search"));
    dispatch(updateIsSearchAction(false));
    dispatch(updateSearchValue(''));
    dispatch(getArticleListFuction() as any);
  };


  const handleFavorite = () => {
    dispatch(updateCurrentComponentAction("favorite"));
    if (getTokenWithExpireTime("tokenWithExpireken")) {
      dispatch(getFavoriteListFuction() as any);
    }
  }

  const handleLogin = () => {
    setModal(true);
    dispatch(updateValidationAction(true));
  }

  const handleLogout = () => {
    LogoutFunction();
  }

  const closeModal = () => {
    setModal(false);
    dispatch(updateValidationAction(true));
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
          { loginCheck && <Button onClick={handleFavorite}>즐겨찾기</Button> }
          { loginCheck 
            ? <Button onClick={handleLogout}>로그아웃</Button> 
            : <Button onClick={handleLogin}>로그인</Button> 
          }
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
  cursor: pointer;
`;

const Buttons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 0;
  margin-right: 5rem;
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