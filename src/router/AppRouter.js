import { Route, Switch, Router } from "react-router-dom";
import Search from "../components/Search";
import createHistory from "history/createBrowserHistory";
import About from "../components/About";
import CollectionPage from "../components/CollectionPage";
import Header from "../components/Header";
import LoginPage from "../components/Login";
import React from "react";
export const history = createHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Search} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/Collection" component={CollectionPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
