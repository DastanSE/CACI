import AppTypes from '../types/appTypes';

export const fetchEvents = () => async dispatch => {
  const res = await fetch('https://caci-admin.herokuapp.com/admin/api/fetch_event', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_EVENTS, payload: json });
};
