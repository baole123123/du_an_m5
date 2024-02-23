import { SET_CART, SET_USER } from "./action";

let oldCart = localStorage.getItem("cart");
oldCart = oldCart ? JSON.parse(oldCart) : [];
const initialState = {
  cart: oldCart,
  user: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
     localStorage.setItem('cart',JSON.stringify(action.payload));
      return { ...state, cart: action.payload };
    case SET_USER:
     localStorage.setItem('cart',JSON.stringify(action.payload));
      return { ...state, user: action.payload };
  }
  return state;
};

export default rootReducer;