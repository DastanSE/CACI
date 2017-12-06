import AppTypes from '../types/appTypes';

export const fetchRepertoire = () => async dispatch => {
  const res = await fetch('https://caci-admin.herokuapp.com/admin/api/fetch_repertoire', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_REPERTOIRE, payload: json });
};
