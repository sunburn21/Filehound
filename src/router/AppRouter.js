import { Route, Switch, BrowserRouter } from "react-router-dom";
import Search from "../components/Search";
import About from "../components/About";
import CollectionPage from "../components/CollectionPage";
import Header from "../components/Header";
import React from "react";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Search} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/Collection" component={CollectionPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
