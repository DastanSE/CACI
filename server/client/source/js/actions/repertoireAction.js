import AppTypes from '../types/appTypes';

export const fetchRepertoire = () => async dispatch => {
  const res = await fetch('http://112.126.81.232:5000/admin/api/fetch_repertoire', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_REPERTOIRE, payload: json });
};
