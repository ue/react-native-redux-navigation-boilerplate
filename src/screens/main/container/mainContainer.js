import React, { Component } from "react";
// import { connect } from 'react-redux';

// Services and Actions

// Middleware

// Constants

// Utilities

// Component
import MainScreen from "../screen/mainScreen";

/*
 *            Props Name        Description                                     Value
 *@props -->  props name here   description here                                Value Type Here
 *
 */

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions

  // Component Functions

  render() {
    return <MainScreen />;
  }
}

// const mapStateToProps = state => ({
//   user: state.user.user,
// });

// export default connect(mapStateToProps)(MainContainer);
export default MainContainer;
