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