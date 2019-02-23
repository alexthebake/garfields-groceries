import React from 'react';
import PropTypes from 'prop-types';

// I'm having second thoughts about this function. The idea is to provide
// some amount of form validation (making sure that you can only have
// positive quantity values). However, upon second look, the function is a bit
// convoluted. To fix this, we could probably avoid redefining the event and
// handling validation elsewhere.
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
  // Ideally we could say that quantity can only be a number.
  // The only reason it could possibly be a string is because this prop is
  // coming from an input value. To fix this we could cast `quantity` to a
  // number before passing it into this component.
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onQuanityChange: PropTypes.func,
};

export default RecommendationRow;
