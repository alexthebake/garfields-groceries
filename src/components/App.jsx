import React from 'react';
import { fetchRecommendations } from '../api/userRecommendations';
import UserRecommendations from './UserRecommendations';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRecommendations();
  }

  render() {
    return (
      <div className="app-wrapper">
        {this.props.userRecommendations.loaded && (
          <UserRecommendations
            user={this.props.userRecommendations.user}
            products={this.props.userRecommendations.user.product_list}
          />
        )}
      </div>
    );
  }
}

export default App;
