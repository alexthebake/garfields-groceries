import React from 'react';
import { fetchRecommendations } from '../api/userRecommendations';

function RecommendationRow({ product }) {
  return (
    <div className="recommendation-row">
      <h3>{product.name}</h3>
      <span>{product.price}</span>
      <div
        style={{
          width: 100,
          height: 100,
          background: `url(${product.image})`,
          backgroundSize: 'cover'
        }}
      />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false,
      user: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ loading: true });
    return fetchRecommendations().then(user => {
      this.setState({
        user,
        loaded: true,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loaded) {
      const { user } = this.state;
      const fullName = `${user.first_name} ${user.last_name}`;
      const sortedRecommendations = _.sortBy(
        user.product_list,
        ({ match }) => -match
      );
      return (
        <div>
          <h1>Recommendations for {fullName}</h1>
          {_.map(sortedRecommendations, (product, i) => (
            <RecommendationRow key={i} product={product} />
          ))}
          <p>Number of products: {user.product_list.length}</p>
        </div>
      );
    }
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return null;
  }
}

export default App;
