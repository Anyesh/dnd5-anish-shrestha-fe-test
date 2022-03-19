import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Page404 } from "./components/Page404/Page404";
import ClassList from "./pages";
import ClassPage from "./pages/class";
import Spell from "./pages/spell";

export const App = () => {
  return (
    <div className="overflow-hidden">
      {/* <h1 className="text-blue-800 text-2xl">Hello</h1> */}
      <Switch>
        <Route exact path={"/"} component={ClassList} />
        <Route exact path={"/class"} component={ClassPage} />
        <Route exact path={"/spell"} component={Spell} />

        <Route path={"/404"} render={() => <Page404 />} />
        <Redirect from="*" to="/404" />
      </Switch>
      <footer>
        <p className="text-center text-gray-500 text-xs mt-10">
          Anish Shrestha | <a href="https://anyesh.me">@anyesh.me</a>
        </p>
      </footer>
    </div>
  );
};
