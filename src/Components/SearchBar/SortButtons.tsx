import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateSelectedFilterAction, getArticleListFuction, selectedFilter  } from '../../data/article';
import { isSearch  } from '../../data/manager';


interface WrapperProps {
  searchOn : string;
}

interface ButtonProps {
  filter : string;
  searchOn : string;
}

const SortButtons = () => {
  const dispatch = useDispatch();
  const searchOn = useSelector(isSearch)
  const filter = useSelector(selectedFilter)
  const handleSort = (sortType: string) => {
    dispatch(updateSelectedFilterAction(sortType));
    dispatch(getArticleListFuction() as any)
  }

  return (
    <Wrapper  searchOn={searchOn.toString()}>
      <Button filter={(filter.toString() === "popularity").toString()} searchOn={searchOn.toString()} onClick={() => handleSort("popularity")}>인기 출처순</Button>
      <Button filter={(filter.toString() === "recent").toString()} searchOn={searchOn.toString()} onClick={() => handleSort("recent")}>최신순</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;

  ${({ searchOn }) => {
    return searchOn === 'false' ? `opacity: 0` : null;
  }}
`

const Button = styled.div<ButtonProps>`
  margin: 1rem 1rem 0;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.7rem 0.5rem 0.5rem;
  
  ${({ filter, searchOn }) => {
    return searchOn === 'true' && filter === 'true' 
          ? `background-color: #3AED6D;` 
          : null;
  }}
  
  &:hover {
    transform: scale(1.1);
  }
`

export default SortButtons