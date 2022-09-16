import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getFavoriteArticleList } from '../../lib/local-storage';

export const article = createSlice({
  name: 'article',
  initialState: {
    articleList: [],
    searchValue: '',
    selectedFilter: 'recent',
    resultNum: 0,
    isLoading: false,
    favoriteArticleList: [],
    selectedArticle: {},
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
    updateResultnumFilterAction: (state, action) => {
      state.resultNum = action.payload;
    },
    updateIsLoadingAction: (state, action) => {
      state.isLoading = action.payload;
    },
    updateFavoriteArticleListAction: (state, action) => {
      state.favoriteArticleList = action.payload;
    },
    updateSelectedArticleAction: (state, action) => {
      state.selectedArticle = action.payload;
    },
  },
});

export const {
  updateArticleListAction,
  updateSearchValue,
  updateSelectedFilterAction,
  updateResultnumFilterAction,
  updateIsLoadingAction,
  updateFavoriteArticleListAction,
  updateSelectedArticleAction,
} = article.actions;

export const articleList = state => state.article.articleList;
export const searchValue = state => state.article.searchValue;
export const selectedFilter = state => state.article.selectedFilter;
export const resultNum = state => state.article.resultNum;
export const isLoading = state => state.article.isLoading;
export const favoriteArticleList = state => state.article.favoriteArticleList;
export const selectedArticle = state => state.article.selectedArticle;

export const getFavoriteListFuction = () => {
  return (dispatch, getState) => {
    const favoriteList = getFavoriteArticleList('favorite');
    dispatch(updateFavoriteArticleListAction(favoriteList));
    dispatch(updateArticleListAction(favoriteList));
  };
};

export const getArticleListFuction = page => {
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
    if (!page) {
      params.page = 1;
    } else {
      params.page = page + 1;
    }
    axios
      .get(`${url}`, { params })
      .then(res => {
        dispatch(updateResultnumFilterAction(res.data.totalResults));
        let newData = res.data.articles;
        if (page) {
          newData = [...getState().article.articleList, ...res.data.articles];
        }
        dispatch(updateArticleListAction(newData));
      })
      .finally(() => {
        dispatch(updateIsLoadingAction(false));
      });
  };
};

export default article.reducer;
