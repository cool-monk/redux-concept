import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducers";
import sweetsReducer from "./sweets/sweetsReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  sweets: sweetsReducer,
  user: userReducer,
});
export default rootReducer;
