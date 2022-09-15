import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { updateloginInfoAction, loginInfo } from '../../data/user';
import { validation } from '../../data/manager';
import { validateLogin } from '../../lib/validate';

interface LoginProps {
  handleModal: () => void
}

interface ValidationProps {
  checkValidation: string;
}

const Login = ({handleModal}: LoginProps) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(loginInfo);
  const checkValidation = useSelector(validation);
  const handleSignInClick = () => {
    validateLogin(userInfo, handleModal);
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>, key : string) => {
    const loginUser = { ...userInfo };
    loginUser[key] = e.target.value;
    dispatch(updateloginInfoAction(loginUser));
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
            <Input onChange={(e) => handleChange(e, "account")} placeholder='Account' type="text" />
        </InputWrapper>
        <InputWrapper>
            <Input onChange={(e) => handleChange(e, "password")} placeholder='Password' type="password" />
        </InputWrapper>
        <Validation checkValidation={checkValidation.toString()}>아이디, 비밀번호를 다시 확인해 주시기 바랍니다.</Validation>
        <ButtonWrapper>
          <LoginButton onClick={handleSignInClick}>Sign in</LoginButton>
        </ButtonWrapper>
      </Inputs>
    </Wrapper>
  )
}

const Validation = styled.div<ValidationProps>`
  margin: 0.5rem 0;
  font-weight: 400;
  color: ${({ theme }) => theme.darkgrey};

  ${({ checkValidation }) => {
    return checkValidation === 'true' && `opacity: 0`;
  }}
`

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