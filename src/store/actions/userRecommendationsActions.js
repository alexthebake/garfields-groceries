import userRecommendationsAPI from '../../api/userRecommendations';
import { USER_RECOMMENDATIONS } from '../actionTypes';

function fetchRecommendationsLoading() {
  return { type: USER_RECOMMENDATIONS.LOADING };
}

function fetchRecommendationsSuccess(user) {
  return {
    type: USER_RECOMMENDATIONS.SUCCESS,
    payload: user,
  };
}

function fetchRecommendationsFailure(error) {
  return {
    type: USER_RECOMMENDATIONS.FAILURE,
    payload: error,
  };
}

// I've actually written some boilerplate that makes this much simpler!
// Actually... I've written three different versions of redux boilerplate
//   1. https://github.com/alexthebake/redux-crud
//      (first attempt, just for CRUD actions)
//   2. https://github.com/alexthebake/redux-boilerplate
//      (second attempt, more general, but got super confusing when I tried to
//      implement nested resources)
//   3. https://github.com/alexthebake/hotplate
//      (third attempt, also more general, but sadly not complete)
export function fetchRecommendations() {
  return dispatch => {
    dispatch(fetchRecommendationsLoading());
    return userRecommendationsAPI
      .fetchRecommendations()
      .then(user => {
        dispatch(fetchRecommendationsSuccess(user));
        return user;
      })
      .catch(error => {
        dispatch(fetchRecommendationsFailure(error));
        return error;
      });
  };
}
