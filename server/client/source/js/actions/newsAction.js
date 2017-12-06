import AppTypes from '../types/appTypes';

export const fetchNews = () => async dispatch => {
  const res = await fetch('https://caci-admin.herokuapp.com/admin/api/fetch_news', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_NEWS, payload: json });
};
