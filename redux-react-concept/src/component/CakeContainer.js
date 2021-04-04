import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
  // console.log(props);
  return (
    <div>
      <h1>
        <strong>CakeContainer</strong>
      </h1>
      <p>No of cakes{props.cake.noOfCakes}</p>
      <p>No of jalebi{props.sweets.jalebi}</p>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// You can include the other props passed to this component from parent component
function mapStateToProps(state, ownProps) {
  // console.log(state);
  return {
    cake: state.cake,
    sweets: state.sweets,
    ...ownProps,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(dispatch);
  return {
    buyCake: () => {
      // Can call multiple dispatch on one action
      dispatch(buyCake());
      dispatch(buyCake());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
