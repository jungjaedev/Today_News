import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { updateSearchValue, getArticleListFuction, searchValue } from '../../data/article';
import { updateCurrentComponentAction, updateIsSearchAction } from '../../data/manager'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const dispatch = useDispatch();
  const typedValue = useSelector(searchValue); 
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(e.target.value))
  }

  const handleClick = () => {
    dispatch(updateIsSearchAction(true));
    dispatch(getArticleListFuction() as any);
    dispatch(updateCurrentComponentAction("search"));
  }

  const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <Wrapper>
      <SearchInput value={typedValue} onKeyPress={(e)=> handleKeyPress(e)} placeholder="검색어를 입력하세요." onChange={e => handleChange(e)} type="text" />
      <AiOutlineSearch style={{ cursor: 'pointer'}} size={36}  onClick={handleClick}  />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
  width: 27rem;
`

const SearchInput = styled.input`
  /* border: none; */
  height: 3rem;
  font-size: 2rem;
  border: none;
  margin-left: 1rem;
`

export default Search