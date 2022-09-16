import { articleDataProps } from '../type/article'

export const setTokenWithExpireTime = ( name: string, token: string, tts: number ) => {
  const obj = {
    token,
    expire: Date.now() + tts,
  };

  const objString = JSON.stringify(obj);
  window.localStorage.setItem(name, objString);
}

export const getTokenWithExpireTime = (name: string) => {
  const objString = window.localStorage.getItem(name);

  if (!objString) return null;

  const obj = JSON.parse(objString);

  if (Date.now() > obj.expire) {
    window.localStorage.removeItem(name);
    return null;
  }

  return obj.token;
};

export const setFavoriteArticleList = (article : articleDataProps, name: string) => {
  let articleList = [];
  const objString = window.localStorage.getItem(name);

  if(objString) {
    articleList = JSON.parse(objString);
  }
  articleList.push(article);
  window.localStorage.setItem(name,JSON.stringify(articleList));
}

export const getFavoriteArticleList = (name: string) => {
  const objString = window.localStorage.getItem(name);
  if (!objString) return null;
  let articlListArray = JSON.parse(objString);

  return articlListArray;
}