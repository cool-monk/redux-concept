import { Provider } from "react-redux";
import store from "./redux/store";
// import CakeContainer from "./component/CakeContainer";
// import IcecreamContainer from "./component/IcecreamContainer";
// import SweetsContainer from "./component/SweetsContainer";
// import NewCakeContainer from "./component/NewCakeContainer";
import UserContainer from "./component/UserContainer";
import "./App.css";
// import CakeClassContainer from "./component/CakeClassContainer";
// import HooksCakeContainer from "./component/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* one way to pass dispatch methond */}
        {/* <CakeContainer store={store} /> */}

        {/* <CakeContainer myProps={"someValue here"} /> */}
        <UserContainer />
        {/* <NewCakeContainer />
        <IcecreamContainer />
        <SweetsContainer /> */}
        {/* <CakeClassContainer /> */}
        {/* <HooksCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
