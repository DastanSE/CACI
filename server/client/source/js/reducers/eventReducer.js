import AppTypes from '../types/appTypes';

const initialState = {
  _isLoading: false,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_EVENTS:
      console.log('fetch event action payload: ', action.payload)
      state = {
        ...state,
        _isLoading: true,
        data: action.payload || false,
      };
      break;
  }
  return state;
}
