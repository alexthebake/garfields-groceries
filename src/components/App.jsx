import React from 'react';
import PropTypes from 'prop-types';
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

App.propTypes = {
  // The usefulness of these particular propType definitions is unclear...
  // We could define the expected shape of `userRecommendations`, or break
  // it up in the `AppContainer` and then define the expected types.
  // Again, for simplicity we'll go with this.
  userRecommendations: PropTypes.object,
  fetchRecommendations: PropTypes.func,
}

export default App;
