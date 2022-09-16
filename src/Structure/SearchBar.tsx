import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Search from "../Components/SearchBar/Search"
import SortButtons from "../Components/SearchBar/SortButtons"
import { currentComponent } from '../data/manager';

const SearchBar = () => {
  const current = useSelector(currentComponent);

  const content = current === "detail" 
                  ? null 
                  : (
                    <>
                      <Search />
                      <SortButtons />
                    </>
                  )
  return (
    <Wrapper>
      {content}
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