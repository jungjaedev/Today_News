import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsArrowUpCircle } from 'react-icons/bs'

const ButtonToTop = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const arrow = toggleBtn ? <BsArrowUpCircle opacity="5" size="48" style={{backgroundColor: 'white', borderRadius: '2rem', opacity:"0.65"}} /> : null;

  return (
    <Wrapper onClick={handleClickToTop}>
      {arrow}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  
  &:hover {
    cursor: pointer;
  }
`

export default ButtonToTop