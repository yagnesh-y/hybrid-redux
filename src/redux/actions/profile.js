import axios from "axios";
// import { getErrorCodeMapping } from "../utils";

import constants from "../constants/Profile.constants";
import UserProfileClient from "../../api-sdk/user-profile";

const getProfileLoading = () => ({
  type: constants.GET_PROFILE_LOADING
});

const getProfileSuccess = ({ data }) => ({
  type: constants.GET_PROFILE_SUCCESS,
  payload: { data }
});

const getProfileFailure = () => ({
  type: constants.GET_PROFILE_FAILURE
});

export const getProfile = () => {
  dispatch(getProfileLoading());
  return UserProfileClient.getProfile()
    .then(response => {
      // if (response.status.toUpperCase() === RESPONSE_CODES.SUCCESS) {
      dispatch(getProfileSuccess({ data: response }));
      return response;
      // }
      // dispatch(getProfileFailure());
      // const error = getErrorCodeMapping(response.errorCode); // eslint-disable-line
      // TODO: dispatch the failure toast here
      // return false;
    })
    .catch(err => {
      dispatch(getProfileFailure({ error: err }));
      return false;
    });
};
