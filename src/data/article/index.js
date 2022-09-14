import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const article = createSlice({
  name: 'article',
  initialState: {
    articleList: [],
    searchValue: '',
    selectedFilter: 'recent',
  },
  reducers: {
    updateArticleListAction: (state, action) => {
      state.articleList = action.payload;
    },
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    updateSelectedFilterAction: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { updateArticleListAction, updateSearchValue, updateSelectedFilterAction } = article.actions;

export const articleList = state => state.article.articleList;
export const searchValue = state => state.article.searchValue;
export const selectedFilter = state => state.article.selectedFilter;

export const getArticleListFuction = () => {
  return (dispatch, getState) => {
    const searchValue = getState().article.searchValue;
    const current = getState().manager.currentComponent;
    const filter = getState().article.selectedFilter;
    const onSearch = getState().manager.isSearch;
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = process.env.REACT_APP_API_URL;
    let params = { apiKey, sortBy: filter };

    if (current === 'search' && onSearch === false) {
      url += '/top-headlines';
      params.country = 'us';
    } else if (current === 'search' && onSearch === true) {
      url += '/everything';
      params.q = searchValue;
    }
    axios.get(`${url}`, { params }).then(res => {
      dispatch(updateArticleListAction(res.data.articles));
    });
  };
};

export default article.reducer;
