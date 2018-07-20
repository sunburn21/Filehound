import React, { Component } from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
const store = configureStore();
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

export default App;
