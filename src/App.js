import React from "react";
import Homepage from "./pages/homepage/Homepage-component";
import ShopPage from "./pages/shop/shop-component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase-db";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// const HatsPage = () => (
//   <div>
//     <h1>sfsfd</h1>
//   </div>
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log("ini user login", user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;