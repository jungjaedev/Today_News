import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import ArticleItem from './ArticleItem'

interface articleDataProps {
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}
// key: 195f743d0a9c4b149ea6c902992bd9ad
const ArticleList = () => {
  const [articleData, setArticleData] = useState<articleDataProps[]>();

  useEffect(() => {
    axios.get<any>('https://newsapi.org/v2/everything', 
    { params : {
        apiKey:'195f743d0a9c4b149ea6c902992bd9ad',
        q:'health',
      }
    }).then(res => {
      setArticleData(res.data.articles)
    });
  }, [])
  return (
    <Wrapper>
      {articleData ? 
      articleData.map((article) => {
        return (
          <ArticleItem article={article} />
        )
    }) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`


export default ArticleList