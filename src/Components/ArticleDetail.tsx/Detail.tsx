import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { selectedArticle } from '../../data/article/index';
import { updateCurrentComponentAction } from "../../data/manager"
import { editArticleFucntion } from '../../lib/articelList';



const Detail = () => {
  const article = useSelector(selectedArticle);
  const dispatch = useDispatch();
  const [changedText, setChangedText] = useState('')

  const handleCancel = () => {
    dispatch(updateCurrentComponentAction("favorite")); 
  }

  const handleSave = () => {
    editArticleFucntion(article.title, changedText)
    dispatch(updateCurrentComponentAction("favorite"));
  }

  const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    setChangedText(e.target.value);
  }

  return (
    <Wrapper>
      <Top>
        <Image src={article.urlToImage} />
        <MainText>
          <Title>{article.title}</Title>
          <ArticleInfo>
            <Author>{article.author}</Author>
            <PublishedAt>{article.publishedAt.replace(/[T, Z]/g,' ')}</PublishedAt>
          </ArticleInfo>
        </MainText>
      </Top>
      <Content defaultValue={article.content} onChange={(e) =>handleChange(e)} />
      <ButtonWrapper>
        <Button onClick={handleCancel}>취소하기</Button>
        <Button onClick={handleSave}>저장하기</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  display: flex;
  border-radius: 2rem;
  background-color:  ${({ theme }) => theme.lightGrey};
`

const Image = styled.img`
  height: 20rem;
  border-radius: 2rem;
  width: 28rem;
`

const Title = styled.div`
  font-size: 3rem;
  line-height: 4rem;
  height: 14rem;
`

const ArticleInfo = styled.div`
  height: 6rem;
`

const MainText = styled.div`
  height: auto;
  padding-left: 2rem;
`

const PublishedAt = styled.div`
  height: 3rem;
  line-height: 3rem;
  font-size: 1.6rem;
`

const Author = styled.div`
  height: 3rem;
  font-size: 1.8rem;
  line-height: 3rem;

`

const Content = styled.textarea`
  padding: 3rem;
  height: 20rem;
  line-height: 3rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  border-radius: 2rem;
  resize: none;
  &:focus {
    outline: none;
  }
`

const  Button = styled.button`
  margin: 1rem 1rem 0;
  cursor: pointer;
  font-size: 1.1rem;
  width: 10rem;
  border-radius: 2rem;
  color: white;
  border: 1px solid white;
  font-weight: 600;
  padding: 1rem;
  background-color:  ${({ theme }) => theme.blue};

  &:hover {
    background-color: ${({ theme }) => theme.lightGreen};
    color: black;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 15rem;
`

export default Detail;