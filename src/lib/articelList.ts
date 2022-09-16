import axios from 'axios';
import { store } from '../data/store';
import { updateArticleListAction, updateResultnumFilterAction, updateIsLoadingAction  } from '../data/article';

interface paramsProps {
  apiKey: string | undefined;
  sortBy: string;
  country?: string;
  q?: string;
}

export const getArticleListFuction = () => {
  const state = store.getState();
  const searchValue = state.article.searchValue;
  const filter = state.article.selectedFilter;
  const current = state.manager.currentComponent;
  const onSearch = state.manager.isSearch;
  const apiKey = process.env.REACT_APP_API_KEY;
  let url = process.env.REACT_APP_API_URL;
  let params : paramsProps = { apiKey, sortBy: filter } ;

  if (current === 'search' && onSearch === false) {
    url += '/top-headlines';
    params.country = 'us';
  } else if (current === 'search' && onSearch === true) {
    url += '/everything';
    params.q = searchValue;
  }
  return (
    axios
    .get(`${url}`, { params })
    .then(res => {
      store.dispatch(updateResultnumFilterAction(res.data.totalResults));
      store.dispatch(updateArticleListAction(res.data.articles));
    })
    .finally(() => {
      store.dispatch(updateIsLoadingAction(false));
    })
  );
};