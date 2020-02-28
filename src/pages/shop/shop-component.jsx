import React, { Component } from "react";
import DataShop from "./shop-data";
import CollectionPreview from "../../components/preview-component/collection-preview";
export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: DataShop
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othercollectionProps }) => (
          <CollectionPreview key={id} {...othercollectionProps} />
        ))}
      </div>
    );
  }
}
