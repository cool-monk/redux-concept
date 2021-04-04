import React from "react";
import { connect } from "react-redux";
import { buyJalebi, buyGulabjamun } from "../redux/sweets/sweetsActions";
import { BUY_GULAB_JAMUN } from "../redux/sweets/sweetsTypes";

function SweetsContainer(props) {
  //   console.log(props);
  return (
    <div>
      <h1>
        <strong>SweetsContainer</strong>
      </h1>
      <p>No of jalebi{props.sweets.jalebi}</p>
      <p>No of gulabjamun{props.sweets.gulabJamun}</p>

      <button onClick={props.buyGulabjamun}>Buy GulabJAmun</button>
      <button onClick={props.buyJalebi}>Buy Jalebi</button>
    </div>
  );
}

function mapStateToProps(state) {
  //   console.log(state);
  return {
    sweets: state.sweets,
  };
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return {
    buyJalebi: () => dispatch(buyJalebi()),
    buyGulabjamun: () => dispatch({ type: BUY_GULAB_JAMUN }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SweetsContainer);
