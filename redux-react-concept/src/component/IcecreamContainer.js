import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";
function IcecreamContainer(props) {
  //   console.log(props);
  return (
    <div>
      <h1>
        <strong>IcecreamContainer</strong>
      </h1>
      <p>No of cakes{props.cake.noOfCakes}</p>
      <p>No of icecream{props.icecream.noOfIcecreams}</p>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
}

function mapStateToProps(state) {
  //   console.log(state);
  return {
    cake: state.cake,
    icecream: state.icecream,
  };
}

function mapDispatchToProps(dispatch) {
  //   console.log(dispatch);
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
