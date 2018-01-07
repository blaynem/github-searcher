import React from 'react';

export const RepoCards = ({ data }) => (
  <div className="repo-card">
    <p className="title">{data.name}</p>
    { data.description ?
      <p className="description">{data.description}</p>
      : <p className="no-description">No Description</p>
    }
    <div className="icons-div">
      <span className="stargazers_count"><i className="fas fa-star" /> {data.stargazers_count}</span>
      <span className="forks"><i className="fas fa-code-branch"/> {data.forks}</span>
      <span className="open_issues"><i className="fas fa-exclamation-circle"/> {data.open_issues}</span>
      <span className="size">{data.size}kb</span>
    </div>
    <a href={data.html_url} className="url">{data.html_url}</a>
  </div>
)