import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapSteateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
  /*(ownProps.match.params.collectionId)(state) this selector needs
   a part of the state depending on the url parameter*/
});

export default connect(mapSteateToProps)(CollectionPage);
