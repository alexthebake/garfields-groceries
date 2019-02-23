import React from 'react';
import RecommendationRow from './RecommendationRow';

class UserRecommendations extends React.Component {
  constructor(props) {
    super(props);

    // Initialize form state
    let emptySelection = {};
    _.forEach(props.products, product => {
      emptySelection[product.name] = 0;
    });

    this.state = {
      selectedProducts: emptySelection,
    };
    this.onQuanityChange = this.onQuanityChange.bind(this);
  }

  onQuanityChange(event) {
    this.setState({
      selectedProducts: {
        ...this.state.selectedProducts,
        [event.target.name]: event.target.value,
      },
    });
  }

  getProductPrice(name) {
    const product = _.find(this.props.products, { name });
    if (!product) return 0;
    return parseFloat(_.tail(product.price).join(''));
  }

  cartTotal() {
    const total = _(this.state.selectedProducts)
      .map((quantity, productName) => {
        const price = this.getProductPrice(productName);
        return price * quantity;
      })
      .sum();
    return _.round(total, 2);
  }

  cartSummary() {
    const sortedProducts = _(this.state.selectedProducts)
      .map((quantity, productName) => ({ quantity, productName }))
      .reject({ quantity: 0 })
      .sortBy('productName')
      .value();
    return (
      <div className="cart-summary">
        {sortedProducts.length > 0 && (
          <div className="cart-summary__row cart-summary__row--header">
            <span className="cart-summary__product-name">Product</span>
            <span className="cart-summary__product-quantity">Quantity</span>
          </div>
        )}
        {_.map(sortedProducts, ({ quantity, productName }) => (
          <div key={productName} className="cart-summary__row">
            <span className="cart-summary__product-name">
              {_.capitalize(productName)}
            </span>
            <span className="cart-summary__product-quantity">
              {quantity} x ${this.getProductPrice(productName)}
            </span>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { user, products } = this.props;
    const fullName = `${user.first_name} ${user.last_name}`;
    const sortedRecommendations = _.sortBy(products, ({ match }) => -match);
    return (
      <div className="user-recommendations">
        <div className="user-recommendations__products">
          <h1>Recommendations for {fullName}</h1>
          <p>
            Here are our best recommendations based off of your preferences.
            Enter the quanity for every item you'd like to add to your cart.
          </p>
          <div className="user-recommendations__recommendation-rows">
            {_.map(sortedRecommendations, (product, i) => (
              <RecommendationRow
                key={i}
                product={product}
                quantity={this.state.selectedProducts[product.name]}
                onQuanityChange={this.onQuanityChange}
              />
            ))}
          </div>
        </div>
        <div className="user-recommendations__cart">
          <h2>Cart</h2>
          {this.cartSummary()}
          <span className="user-recommendations__cart__total">
            Current total: ${this.cartTotal()}
          </span>
        </div>
      </div>
    );
  }
}

export default UserRecommendations;
