import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer(props) {
  const cake = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        <strong>HooksCakeContainer</strong>
      </h1>
      <p>No of cakes{JSON.stringify(cake.noOfCakes)}</p>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
