import api from 'api';
import AppConstants from '../constants/AppConstants';

// Market actions

export function getMarketList() {
  return {
    type: AppConstants.GET_MARKET_LIST,
  };
}

// Balance actions

function testAsyncStart() {
  return {
    type: AppConstants.GET_BALANCE,
  };
}

function testAsyncSuccess(data) {
  return {
    type: AppConstants.WITHDRAW_MONEY,
    data,
  };
}

function withdrawMoneyError(error) {
  return {
    type: AppConstants.WITHDRAW_MONEY_FAILED,
    error,
  };
}

// export function testAsync() {
//   return function (dispatch) {
//     dispatch(testAsyncStart());
//     api.testAsync()
//       .then(data => dispatch(testAsyncSuccess(data)))
//       .catch(error => dispatch(testAsyncError(error)));
//   };
// }

// Update
