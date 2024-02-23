import axios from "axios";

export const SET_USER = "SET_USER";
export const SET_CART = "SET_CART";

export const login = payload => {
  return async dispatch => {
    const { username, password } = payload;
    if (username === "admin" && password === "123") {
      dispatch({
        type: "",
        payload
      });
      dispatch();
    } else {
      alert("login failure!");
    }
  };
};

   