import React from 'react'
import styled from "styled-components";

const SortButtons = () => {
  const handleSort = (sortType: string) => {
    console.log(sortType);
  }

  return (
    <Wrapper>
      <Button onClick={() => handleSort("popular")}>인기 출처순</Button>
      <Button onClick={() => handleSort("recent")}>최신순</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
`

const Button = styled.div`
  margin: 1rem 1rem 0;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.7rem 0.5rem 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.lightGreen};
  }

`

export default SortButtons