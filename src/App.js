import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Inbox from "./components/Inbox";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Inbox />
          </Route>
        </Switch>
      </div>
      <Redirect exact from="/" to="/inbox" />
    </Router>
  );
}
