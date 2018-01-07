import React, { Component } from 'react';

import SearchBar from '../components/Search.Bar'
import UserBadge from '../components/User.Badge';

class App extends Component {
  render() {
    return (
      <div id="App">
        <h1 className="welcome">Github User Search</h1>
        <SearchBar />
        <UserBadge />
      </div>
    );
  }
}

export default App;