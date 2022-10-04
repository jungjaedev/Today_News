import React from 'react'
import styled from "styled-components";
import Login from './Login';

interface ModalProps {
  handleModal: () => void
}

const Modal = ({handleModal} : ModalProps) => {
  return (
    <Container>
      <Background onClick={handleModal} />
      <ModalBlock>
        <Contents>
          <Login handleModal={handleModal} />
        </Contents>
      </ModalBlock>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(5px);
`;

const ModalBlock = styled.div`
  position: relative;
  top: 6.5rem;
  width: 30rem;
  margin-top: 10rem;
  border-radius: 10px;
  min-height: 35rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Modal