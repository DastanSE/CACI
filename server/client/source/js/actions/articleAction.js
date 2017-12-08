import AppTypes from '../types/appTypes';

export const fetchArticle = () => async dispatch => {
  const res = await fetch('https://caci-admin.herokuapp.com/admin/api/fetch_article', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_ARTICLE, payload: json });
};
