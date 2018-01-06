import React, { Component } from 'react';

import SearchBar from '../components/Search.Bar'

class App extends Component {
  render() {
    return (
      <div>
        Github User Search
        <SearchBar />
      </div>
    );
  }
}

export default App;