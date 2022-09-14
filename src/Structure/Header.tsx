import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const handleMoveHome = () => {
    navigate("/");
  };

  const handleFavorite = () => {
    console.log('즐찾');
  }

  const handleLogin = () => {
    console.log('로긴');
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={require("../assets/header-logo.png")} onClick={handleMoveHome} />
      </LogoWrapper>
      <Buttons>
        <Button onClick={handleFavorite}>즐겨찾기</Button>
        <Button onClick={handleLogin}>로그인</Button>
      </Buttons>
    </Wrapper>
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