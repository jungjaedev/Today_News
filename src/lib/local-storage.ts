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

interface articleDataProps {
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export const setArticleList = (article : articleDataProps) => {
  const articleList = [];
  articleList.push(article);
  window.localStorage.setItem("favorite",JSON.stringify(articleList));
}