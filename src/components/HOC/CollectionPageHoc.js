import React from "react";
import { firebase } from "../../firebase/firebase";
import Login from "../Login";
import { login, logout } from "../../actions/auth";
export default WrappedContent => {
  let finalComp = <h1>hI</h1>;
  return props => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        props.dispatch(logout());
        // console.log(this.props.history);
        // return <Login />;
        finalComp = <Login />;
      } else {
        console.log(user.uid);
        props.dispatch(login(user.uid));
        // if (props.history.location.pathname === "/login") {
        //   props.history.push("/Collection");
        // }
        // return <WrappedContent {...props} />;
        // return (
        //   <div>
        //     <h1>hello</h1>
        //   </div>
        // );
        finalComp = <WrappedContent {...props} />;
      }
    });
    return finalComp;
  };
};
