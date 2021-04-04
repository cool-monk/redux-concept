const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Some info too",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Some info too",
  };
}

// (prevState, action)=> nextState

const initialIcecreamState = {
  icecream: 20,
};
const initalCakeState = {
  noOfCakes: 10,
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        icecream: state.icecream - 1,
      };

    default:
      return state;
  }
};

const cakeReducer = (state = initalCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial", store.getState());
// Unsubscribe is done using simply returning subscribe  same as useffect
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
