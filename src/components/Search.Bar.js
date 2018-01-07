import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUser } from '../actions'

class SearchBar extends Component {
  state = {
    searchInput: ""
  }
  handleChange = (e) => {
    const { value } = e.target

    this.setState({ searchInput: value })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.searchUser(this.state.searchInput)
  }
  render() {
    return (
      <form className="Search-Bar" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.searchInput}/>
        <button>Search</button>
      </form>
    )
  }
}

export default connect(null, { searchUser })(SearchBar);