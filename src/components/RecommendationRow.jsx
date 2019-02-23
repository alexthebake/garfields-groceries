import React from 'react';
import PropTypes from 'prop-types';

function safeOnChange(onChangeCallback) {
  return event => {
    if (event.target.value < 0) {
      const newEvent = {
        ...event,
        target: {
          ...event.target,
          value: 0,
        },
      };
      return onChangeCallback(newEvent);
    }
    return onChangeCallback(event);
  };
}

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
          onChange={safeOnChange(onQuanityChange)}
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
    match: PropTypes.number,
  }),
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onQuanityChange: PropTypes.func,
};

export default RecommendationRow;
