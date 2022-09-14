import React from 'react'
import styled from "styled-components";

interface LoginProps {
  handleModal: () => void
}

const Login = ({handleModal}: LoginProps) => {

  const handleLogin = () => {
    console.log('sign in');
  }
  return (
    <Wrapper>
      <CloseWrapper>
        <CloseImg onClick={handleModal} src={require("../../assets/close.png")} />
      </CloseWrapper>
      <ImageWrapper>
        <Img src={require("../../assets/welcome.png")}></Img>
      </ImageWrapper>
      <Inputs>      
        <InputWrapper>
            <Input placeholder='Account' type="text" />
        </InputWrapper>
        <InputWrapper>
            <Input placeholder='Password' type="password" />
        </InputWrapper>
        <ButtonWrapper>
          <LoginButton onClick={handleLogin}>Sign in</LoginButton>
        </ButtonWrapper>
      </Inputs>
    </Wrapper>
  )
}

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`

const CloseImg = styled.img`
  height: 2rem;
  margin-right: 3rem;
  &:hover {
    cursor: pointer;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 15rem;
`

const LoginButton = styled.button`
  margin: 1rem 1rem 0;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 2rem;
  color: white;
  border: 1px solid white;
  font-weight: 600;
  padding: 1rem;
  background-color:  ${({ theme }) => theme.blue};

  &:hover {
    background-color: ${({ theme }) => theme.lightGreen};
    color: black;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 1rem; */
`

const Img = styled.img`
  height: 7rem;
`

const Inputs = styled.div`
  margin: 0.5rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Input = styled.input`
  height: 3rem;
  font-size: 1.5rem;
  border: none;
`

const InputWrapper = styled.div`
  background-color: white;  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  width: 20rem;
  margin: 3rem 0 0.5rem;
  font-size: 0.5rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  height: 35rem;
  background-color: #015BEA;
  border-radius: 2rem;
`

export default Login