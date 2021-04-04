import { BUY_CAKE } from "./cakeTypes";
const initialState = {
  noOfCakes: 20,
};

const cakeReducer = (state = initialState, action) => {
  console.log("cakeReducer is called");
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
