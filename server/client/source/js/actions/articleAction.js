import AppTypes from '../types/appTypes';

export const fetchArticle = () => async dispatch => {
  const res = await fetch('http://112.126.81.232/admin/api/fetch_article', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_ARTICLE, payload: json });
};
