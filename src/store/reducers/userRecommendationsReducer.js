import { USER_RECOMMENDATIONS } from "../actionTypes";

const INITIAL_STATE = {
  loaded: false,
  loading: false,
  user: null,
  error: null,
}

export default function userRecommendationsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_RECOMMENDATIONS.LOADING:
      return {
        ...state,
        loading: true
      };
    case USER_RECOMMENDATIONS.SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        user: action.payload
      };
    case USER_RECOMMENDATIONS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}