import React from "react";
import PropTypes from "prop-types";

function RecommendationRow({ product, quantity, onQuanityChange }) {
  return (
    <div className="recommendation-row">
      <div
        className="recommendation-row__thumbnail"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="recommendation-row__details">
        <h3 className="recommendation-row__name">{product.name}</h3>
        <span className="recommendation-row__price">{product.price}</span>
      </div>
      <div className="recommendation-row__quantity">
        <input
          type="number"
          name={product.name}
          value={quantity}
          onChange={onQuanityChange}
          className="recommendation-row__quantity-input"
        />
      </div>
    </div>
  );
}

RecommendationRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    match: PropTypes.number
  }),
  quantity: PropTypes.number,
  onQuanityChange: PropTypes.func
};

export default RecommendationRow;
