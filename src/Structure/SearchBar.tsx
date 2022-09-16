import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import BackButton from '../Components/BackButton';
import Search from "../Components/SearchBar/Search"
import SortButtons from "../Components/SearchBar/SortButtons"
import { currentComponent } from '../data/manager';

const SearchBar = () => {
  const current = useSelector(currentComponent);

  const content = current === "detail" 
                  ? <BackButton /> 
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
  position: relative;
  flex-direction: column;
  height: 5rem;
`



export default SearchBar