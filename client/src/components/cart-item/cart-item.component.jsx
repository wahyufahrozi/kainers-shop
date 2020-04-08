import React from "react";

// import "./cart-item.styles.scss";

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);
export default React.memo(CartItem);
/*
react memo where the component will only render again
if the props or state changes. the same as the shouldcomponentUpdate
but the component shouldcomponentUpdate be used in the component class
*/
