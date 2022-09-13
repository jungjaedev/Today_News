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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`



export default SearchBar