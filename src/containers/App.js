import React, { Component } from 'react';

import SearchBar from '../components/Search.Bar'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Github User Search</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;