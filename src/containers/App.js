import React, { Component } from 'react';

import SearchBar from '../components/Search.Bar'
import UserBadge from '../components/User.Badge';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Github User Search</h1>
        <SearchBar />
        <UserBadge />
      </div>
    );
  }
}

export default App;