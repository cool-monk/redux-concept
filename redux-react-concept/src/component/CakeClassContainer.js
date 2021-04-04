import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

class CakeClassContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>
          <strong>CakeClassContainer</strong>
        </h1>
        <p>No of Cakes in Class Component {this.props.noOfCakes}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //   console.log(state);
  return {
    noOfCakes: state.noOfCakes,
  };
}

function mapDispatchToProps(dispatch) {
  //   console.log(dispatch);
  return {
    buyCake: () => dispatch(buyCake()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeClassContainer);
