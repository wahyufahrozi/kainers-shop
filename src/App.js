import React from "react";
import Homepage from "./pages/homepage/Homepage-component";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>sfsfd</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
