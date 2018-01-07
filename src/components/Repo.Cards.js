import React from 'react';

export const RepoCards = ({ data }) => (
  <div className="repo-card">
    <p className="title">{data.name}</p>
    <p className="description">{data.description}</p>
    <p className="url">{data.url}</p>
    <span className="stargazers_count">{data.stargazers_count}</span>
    <span className="size">{data.size}</span>
    <span className="forks">{data.forks}</span>
    <span className="open_issues">{data.open_issues}</span>
    <span className="size">{data.size}</span>
  </div>
)