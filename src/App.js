import React from "react";
import Homepage from "./pages/homepage/Homepage-component";
import ShopPage from "./pages/shop/shop-component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout-component";
/*
import{  auth,
createUserProfileDocument
addCollectionAndDocuments} from './firebase/firebase-db'
*/

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selector";
import "./App.css";

// const HatsPage = () => (
//   <div>
//     <h1>sfsfd</h1>
//   </div>
// );

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    // const { setCurrentUser } = this.props;
    // const {  collectionArray } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //       console.log(this.state);
    //     });
    //   }
    // ===============to store data on firestore========================
    // setCurrentUser(userAuth);
    // addCollectionAndDocuments(
    //   "collections",
    //   collectionArray.map(({ title, items }) => ({ title, items }))
    // );
    //==================================================================
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            //if user login redirect to homepage
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionArray: selectCollectionsForPreview
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStatetoProps, mapDispatchToProps)(App);
