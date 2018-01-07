import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserBadge extends Component {
  render() {
    const { searchData } = this.props
    // if there is no data, we wont render the icon yet.
    if ( searchData === null ) return null;
    return (
      <div className="User-badge">
        <img
          alt="user avatar"
          className="avatar"
          src={searchData.avatar_url} />
        <div className="user-stats">
          <h3 className="name">{searchData.name}</h3>
          <p className="username">{searchData.login}</p>
          <p className="followers">Followers: {searchData.followers}</p>
          <p className="following">Following: {searchData.following}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchData: state.searchData.userData
  }
}

export default connect(mapStateToProps, {})(UserBadge);