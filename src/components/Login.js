import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
const LoginPage = props => {
  return (
    <div>
      <h1>LoginPage</h1>
      <h3>Login with Google</h3>
      <button type="button" onClick={props.startLogin}>
        Google
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  startLogin: () => {
    dispatch(startLogin());
  }
});
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
