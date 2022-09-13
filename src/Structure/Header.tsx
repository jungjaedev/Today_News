import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const handleMoveHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Logo src={require("../assets/header-logo.png")} onClick={handleMoveHome} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  height: 100px;
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`;

export default Header;