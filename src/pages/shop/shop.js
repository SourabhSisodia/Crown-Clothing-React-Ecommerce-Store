import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/Collection-preview";

import React from "react";

function Shop() {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default Shop;
