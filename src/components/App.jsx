import React from 'react';
import { fetchRecommendations } from '../api/userRecommendations';
import UserRecommendations from './UserRecommendations';

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
      let emptySelection = {};
      _.forEach(user.product_list, product => {
        emptySelection[product.name] = 0;
      });
      this.setState({
        user,
        loaded: true,
        loading: false,
      });
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        {this.state.loaded && (
          <UserRecommendations
            user={this.state.user}
            products={this.state.user.product_list}
          />
        )}
      </div>
    );
  }
}

export default App;
