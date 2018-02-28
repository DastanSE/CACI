import AppTypes from '../types/appTypes';

export const fetchEvents = () => async dispatch => {
  const res = await fetch('http://112.126.81.232:5000/admin/api/fetch_events', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_EVENTS, payload: json });
};
