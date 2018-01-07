import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RepoCards } from '../components/Repo.Cards';

class ReposContainer extends Component {
  renderRepoCards = () => {
    const { repoData } = this.props

    return repoData.map( data =>
      <RepoCards key={data.id} data={data}/>
    )
  }
  render() { 
    if ( this.props.repoData === null ) return null;
    if ( this.props.repoData.length < 1 ) return (
      <div className="repo-container">
        <h2>No Repositories</h2>
      </div>
    )
    return (
      <div className="repo-container">
        <h2>Repositories</h2>
        {this.renderRepoCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    repoData: state.searchData.userRepos
  }
}

export default connect(mapStateToProps, {})(ReposContainer);