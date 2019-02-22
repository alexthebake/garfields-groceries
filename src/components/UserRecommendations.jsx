import React from 'react';
import RecommendationRow from "./RecommendationRow";

class UserRecommendations extends React.Component {
  constructor(props) {
    super(props);

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
    return _(this.state.selectedProducts)
      .map((quantity, productName) => {
        const price = this.getProductPrice(productName);
        return price * quantity;
      })
      .sum();
  }

  render() {
    const { user, products } = this.props;
    const fullName = `${user.first_name} ${user.last_name}`;
    const sortedRecommendations = _.sortBy(products, ({ match }) => -match);
    return (
      <div className="user-recommendations">
        <h1>Recommendations for {fullName}</h1>
        <div>Current total: {this.cartTotal()}</div>
        {_.map(sortedRecommendations, (product, i) => (
          <RecommendationRow
            key={i}
            product={product}
            quantity={this.state.selectedProducts[product.name]}
            onQuanityChange={this.onQuanityChange}
          />
        ))}
      </div>
    );
  }
}

export default UserRecommendations;
