import DataShop from "./shop-data";

const INITIAL_STATE = {
  collections: DataShop
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
