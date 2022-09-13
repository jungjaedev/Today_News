import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

interface dataProps {
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

const ArticleList = () => {
  const [data, setData] = useState<dataProps[]>();

  useEffect(() => {
    axios.get<any>('https://newsapi.org/v2/everything?apiKey=f0314630b1d64516bc522a83c6c5b6c0&q=health').then(res => setData(res.data.articles));
  }, [])
  return (
    <div>
      {data ? 
      data.map((article) => {
        return (
          <div>{article.author}</div>
        )
    }) : null}
    </div>
  )
}


export default ArticleList