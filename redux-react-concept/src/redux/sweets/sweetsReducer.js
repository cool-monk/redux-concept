import { BUY_JALEBI, BUY_GULAB_JAMUN } from "./sweetsTypes";
const initialState = {
  jalebi: 100,
  gulabJamun: 110,
};

const sweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_JALEBI:
      return {
        ...state,
        jalebi: state.jalebi - 1,
      };

    case BUY_GULAB_JAMUN:
      return {
        ...state,
        gulabJamun: state.gulabJamun - 1,
      };

    default:
      return state;
  }
};
export default sweetsReducer;
