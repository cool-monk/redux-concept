import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  // console.log(props.store);
  return (
    <div>
      <h1>
        <strong>CakeContainer</strong>
      </h1>
      <p>No of cakes{props.cake.noOfCakes}</p>
      <p>No of jalebi{props.sweets.jalebi}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    cake: state.cake,
    sweets: state.sweets,
  };
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return {
    buyCake: (number) => {
      // Can call multiple dispatch on one action
      dispatch(buyCake(number));
      //   dispatch(buyCake());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
