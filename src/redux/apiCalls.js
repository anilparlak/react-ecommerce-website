import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { api } from "../api";

export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await api().post("/auth/login", user);
    console.log(response.data)
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log("error=>",err)
  }
};


