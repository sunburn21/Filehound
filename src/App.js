import React, { Component } from "react";
import AppRouter, { history } from "./router/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { startSetLinks } from "./actions/links";
import { startSetFolders } from "./actions/folders";
import { Provider } from "react-redux";
import { startSetKeywords } from "./actions/keywords";
import { setUser } from "./actions/user";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
const store = configureStore();

store.dispatch(startSetKeywords());
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    history.push("/login");
    store.dispatch(logout());
  } else {
    // var person = ;
    // console.log(person);
    store.dispatch(setUser(firebase.auth().currentUser));
    store.dispatch(login(user.uid));
    store
      .dispatch(startSetLinks())
      .then(() => {
        return store.dispatch(startSetFolders());
      })
      .then(() => {
        if (history.location.pathname === "/login") {
          history.push("/Collection");
        }
      });
  }
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export { App as default, store };
