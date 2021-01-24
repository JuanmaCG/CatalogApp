import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ApiListContainer } from "./features/Containers/ApiListContainer";
import { ApiDetailComponent } from "./features/Components/ApiDetails/ApiDetailComponent";
import { NavbarComponent } from "./features/Components/Navbar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <ApiListContainer />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/commit/:commitId"
            component={ApiDetailComponent}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
