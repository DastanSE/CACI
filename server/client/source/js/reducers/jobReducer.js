import AppTypes from '../types/appTypes';

const initialState = {
  _isLoading: false,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_JOBS:
      state = {
        ...state,
        _isLoading: true,
        data: action.payload || false,
      };
      break;
  }
  return state;
}
