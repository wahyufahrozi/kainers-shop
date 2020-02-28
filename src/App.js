import React from "react";
import Homepage from "./pages/homepage/Homepage-component";
import ShopPage from "./pages/shop/shop-component";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// const HatsPage = () => (
//   <div>
//     <h1>sfsfd</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
