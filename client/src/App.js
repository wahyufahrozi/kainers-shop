import React, { useEffect, lazy, Suspense } from "react";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
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
import { GlobalStyle } from "./global.styles";

// const HatsPage = () => (
//   <div>
//     <h1>sfsfd</h1>
//   </div>
// );

// the benefit use lazy is the browser download what component when they need to be
const Homepage = lazy(() => import("./pages/homepage/Homepage-component"));
const ShopPage = lazy(() => import("./pages/shop/shop-component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout-component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
// ====================================================================================

const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
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
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              path="/signin"
              //if user login redirect to homepage
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionsForPreview
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStatetoProps, mapDispatchToProps)(App);
