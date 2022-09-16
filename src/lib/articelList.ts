import { store } from '../data/store';
import { updateArticleListAction, updateFavoriteArticleListAction  } from '../data/article';
import { getFavoriteArticleList } from './local-storage';
import { articleDataProps } from '../type/article';

export const deleteFavoriteArticle = (article : articleDataProps) => {
  const favoriteList = getFavoriteArticleList("favorite");
  const articleIndex = favoriteList.findIndex((item : articleDataProps) => item.title === article.title);
  favoriteList.splice(articleIndex,1);
  window.localStorage.setItem("favorite",JSON.stringify(favoriteList));
  store.dispatch(updateFavoriteArticleListAction(favoriteList));
}

export const editArticleFucntion = (title : string, changedText : string) => {
  const favoriteList = getFavoriteArticleList("favorite");
  const articleIndex = favoriteList.findIndex((item : articleDataProps) => item.title === title);
  favoriteList[articleIndex].content = changedText;
  window.localStorage.setItem("favorite",JSON.stringify(favoriteList));
  store.dispatch(updateFavoriteArticleListAction(favoriteList));
  store.dispatch(updateArticleListAction(favoriteList));
}