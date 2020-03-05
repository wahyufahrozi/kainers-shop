import CartActionTypes from "./cart.types";
import { addItemTocart } from "./cart.utill";
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemTocart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
export default cartReducer;
