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
