import AppTypes from '../types/appTypes';

export const fetchJobs = () => async dispatch => {
  const res = await fetch('http://112.126.81.232:5000/admin/api/fetch_jobs', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_JOBS, payload: json });
};
