import React from 'react'
import styled from "styled-components";
import Search from "../Components/Search"
import SortButtons from "../Components/SortButtons"

const SearchBar = () => {
  return (
    <Wrapper>
      <Search />
      <SortButtons />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 1rem 0 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`



export default SearchBar