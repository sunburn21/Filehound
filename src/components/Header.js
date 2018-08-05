import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = props => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Collection">Collection</NavLink>
      <NavLink to="/about">About</NavLink>
      <button type="button" onClick={props.startLogout}>
        Logout
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  startLogout: () => {
    dispatch(startLogout());
  }
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
