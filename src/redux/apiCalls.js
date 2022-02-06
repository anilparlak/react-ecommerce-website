import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { api } from "../api";

export const login = async (dispatch, user) => {
  
  dispatch(loginStart());

  try {
    const response = await api().post("/auth/login", user);

    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  
  }
};


