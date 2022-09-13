import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

const Main = () => {
  useEffect(() => {
    axios.get<any>('https://newsapi.org/v2/everything', {params: {apiKey: 'f0314630b1d64516bc522a83c6c5b6c0', q:'health'}}).then(res => console.log(res.data));
  }, [])
  return (
    <Wrapper>
      Main
      {/* 데이터 있으면 ArticleList */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export default Main