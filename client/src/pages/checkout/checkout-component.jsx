import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.components";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    {cartItems.length ? (
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
    ) : (
      "Your Cart Is Empty"
    )}
    {cartItems.length
      ? cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      : ""}
    {cartItems.length ? (
      <div className="total">
        <span>Total: $ {total}</span>
      </div>
    ) : (
      ""
    )}
    {cartItems.length ? (
      <div className="test-warning">
        *Please use following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp : 06/20 CVV:111
      </div>
    ) : (
      ""
    )}
    {cartItems.length ? <StripeCheckoutButton price={total} /> : ""}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);