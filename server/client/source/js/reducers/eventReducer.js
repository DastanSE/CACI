import AppTypes from '../types/appTypes';

const initialState = {
  _isLoading: true,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_EVENTS:
      state = {
        ...state,
        _isLoading: false,
        data: action.payload || false,
      };
      break;
  }
  return state;
}
