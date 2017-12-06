import AppTypes from '../types/appTypes';

export const fetchJobs = () => async dispatch => {
  const res = await fetch('https://caci-admin.herokuapp.com/admin/api/fetch_jobs', { mode: 'cors' });
  const json = await res.json();

  dispatch({ type: AppTypes.FETCH_JOBS, payload: json });
};
