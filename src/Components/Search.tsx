import React from 'react'
import styled from "styled-components";

const Search = () => {
  return (
    <Wrapper>
      <SearchInput type="text" />
      <SearchImg src={require("../assets/search.png")} alt="search" />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
`

const SearchImg = styled.img`
  width: 3rem;
  margin: 1rem 0.5rem;
  cursor: pointer;
  padding-right: 0.5rem;
` 

const SearchInput = styled.input`
  /* border: none; */
  height: 3rem;
  font-size: 2rem;
  border: none;
  margin-left: 1rem;
`

export default Search