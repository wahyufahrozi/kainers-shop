import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/checkout.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_v7D3PKhJfeUslezwdsDYby5x00zA4zNkbR";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Kainers Shop"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is Rp.${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
      currency="IDR"
    />
  );
};

export default StripeCheckoutButton;
