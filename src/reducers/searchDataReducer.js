import { STOREUSERDATA, STOREREPODATA } from '../constants';

const INITIAL_STATE = {
  loading: false,
  userData: {
    login: "blaynem",
    id: 12465675,
    avatar_url: "https://avatars0.githubusercontent.com/u/12465675?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/blaynem",
    html_url: "https://github.com/blaynem",
    followers_url: "https://api.github.com/users/blaynem/followers",
    following_url: "https://api.github.com/users/blaynem/following{/other_user}",
    gists_url: "https://api.github.com/users/blaynem/gists{/gist_id}",
    starred_url: "https://api.github.com/users/blaynem/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/blaynem/subscriptions",
    organizations_url: "https://api.github.com/users/blaynem/orgs",
    repos_url: "https://api.github.com/users/blaynem/repos",
    events_url: "https://api.github.com/users/blaynem/events{/privacy}",
    received_events_url: "https://api.github.com/users/blaynem/received_events",
    type: "User",
    site_admin: false,
    name: "Blayne Marjama",
    company: "Dreamaker.io",
    blog: "http://blaynemarjama.surge.sh",
    location: "Portland, OR",
    email: null,
    hireable: true,
    bio: "I work as a Front End Developer for Dreamaker.io. I'm passionate about writing clean, commented code and QA.",
    public_repos: 11,
    public_gists: 1,
    followers: 10,
    following: 0,
    created_at: "2015-05-15T20:17:19Z",
    updated_at: "2018-01-05T03:03:02Z"
  },
  userRepos: [
    {
      id: 86185743,
      name: "craigslist-searcher",
      full_name: "blaynem/craigslist-searcher",
      owner: {
      login: "blaynem",
      id: 12465675,
      avatar_url: "https://avatars0.githubusercontent.com/u/12465675?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/blaynem",
      html_url: "https://github.com/blaynem",
      followers_url: "https://api.github.com/users/blaynem/followers",
      following_url: "https://api.github.com/users/blaynem/following{/other_user}",
      gists_url: "https://api.github.com/users/blaynem/gists{/gist_id}",
      starred_url: "https://api.github.com/users/blaynem/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/blaynem/subscriptions",
      organizations_url: "https://api.github.com/users/blaynem/orgs",
      repos_url: "https://api.github.com/users/blaynem/repos",
      events_url: "https://api.github.com/users/blaynem/events{/privacy}",
      received_events_url: "https://api.github.com/users/blaynem/received_events",
      type: "User",
      site_admin: false
      },
      private: false,
      html_url: "https://github.com/blaynem/craigslist-searcher",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/blaynem/craigslist-searcher",
      forks_url: "https://api.github.com/repos/blaynem/craigslist-searcher/forks",
      keys_url: "https://api.github.com/repos/blaynem/craigslist-searcher/keys{/key_id}",
      collaborators_url: "https://api.github.com/repos/blaynem/craigslist-searcher/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/blaynem/craigslist-searcher/teams",
      hooks_url: "https://api.github.com/repos/blaynem/craigslist-searcher/hooks",
      issue_events_url: "https://api.github.com/repos/blaynem/craigslist-searcher/issues/events{/number}",
      events_url: "https://api.github.com/repos/blaynem/craigslist-searcher/events",
      assignees_url: "https://api.github.com/repos/blaynem/craigslist-searcher/assignees{/user}",
      branches_url: "https://api.github.com/repos/blaynem/craigslist-searcher/branches{/branch}",
      tags_url: "https://api.github.com/repos/blaynem/craigslist-searcher/tags",
      blobs_url: "https://api.github.com/repos/blaynem/craigslist-searcher/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/blaynem/craigslist-searcher/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/blaynem/craigslist-searcher/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/blaynem/craigslist-searcher/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/blaynem/craigslist-searcher/statuses/{sha}",
      languages_url: "https://api.github.com/repos/blaynem/craigslist-searcher/languages",
      stargazers_url: "https://api.github.com/repos/blaynem/craigslist-searcher/stargazers",
      contributors_url: "https://api.github.com/repos/blaynem/craigslist-searcher/contributors",
      subscribers_url: "https://api.github.com/repos/blaynem/craigslist-searcher/subscribers",
      subscription_url: "https://api.github.com/repos/blaynem/craigslist-searcher/subscription",
      commits_url: "https://api.github.com/repos/blaynem/craigslist-searcher/commits{/sha}",
      git_commits_url: "https://api.github.com/repos/blaynem/craigslist-searcher/git/commits{/sha}",
      comments_url: "https://api.github.com/repos/blaynem/craigslist-searcher/comments{/number}",
      issue_comment_url: "https://api.github.com/repos/blaynem/craigslist-searcher/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/blaynem/craigslist-searcher/contents/{+path}",
      compare_url: "https://api.github.com/repos/blaynem/craigslist-searcher/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/blaynem/craigslist-searcher/merges",
      archive_url: "https://api.github.com/repos/blaynem/craigslist-searcher/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/blaynem/craigslist-searcher/downloads",
      issues_url: "https://api.github.com/repos/blaynem/craigslist-searcher/issues{/number}",
      pulls_url: "https://api.github.com/repos/blaynem/craigslist-searcher/pulls{/number}",
      milestones_url: "https://api.github.com/repos/blaynem/craigslist-searcher/milestones{/number}",
      notifications_url: "https://api.github.com/repos/blaynem/craigslist-searcher/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/blaynem/craigslist-searcher/labels{/name}",
      releases_url: "https://api.github.com/repos/blaynem/craigslist-searcher/releases{/id}",
      deployments_url: "https://api.github.com/repos/blaynem/craigslist-searcher/deployments",
      created_at: "2017-03-25T20:15:43Z",
      updated_at: "2017-03-26T21:29:10Z",
      pushed_at: "2017-04-05T06:55:50Z",
      git_url: "git://github.com/blaynem/craigslist-searcher.git",
      ssh_url: "git@github.com:blaynem/craigslist-searcher.git",
      clone_url: "https://github.com/blaynem/craigslist-searcher.git",
      svn_url: "https://github.com/blaynem/craigslist-searcher",
      homepage: null,
      size: 95,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      open_issues_count: 0,
      license: null,
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master"
    },
    {
      id: 92606281,
      name: "form-builder",
      full_name: "blaynem/form-builder",
      owner: {
      login: "blaynem",
      id: 12465675,
      avatar_url: "https://avatars0.githubusercontent.com/u/12465675?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/blaynem",
      html_url: "https://github.com/blaynem",
      followers_url: "https://api.github.com/users/blaynem/followers",
      following_url: "https://api.github.com/users/blaynem/following{/other_user}",
      gists_url: "https://api.github.com/users/blaynem/gists{/gist_id}",
      starred_url: "https://api.github.com/users/blaynem/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/blaynem/subscriptions",
      organizations_url: "https://api.github.com/users/blaynem/orgs",
      repos_url: "https://api.github.com/users/blaynem/repos",
      events_url: "https://api.github.com/users/blaynem/events{/privacy}",
      received_events_url: "https://api.github.com/users/blaynem/received_events",
      type: "User",
      site_admin: false
      },
      private: false,
      html_url: "https://github.com/blaynem/form-builder",
      description: "Test Description Description Test Description Test Description Test Description Test Description Test Description Test Description ",
      fork: false,
      url: "https://api.github.com/repos/blaynem/form-builder",
      forks_url: "https://api.github.com/repos/blaynem/form-builder/forks",
      keys_url: "https://api.github.com/repos/blaynem/form-builder/keys{/key_id}",
      collaborators_url: "https://api.github.com/repos/blaynem/form-builder/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/blaynem/form-builder/teams",
      hooks_url: "https://api.github.com/repos/blaynem/form-builder/hooks",
      issue_events_url: "https://api.github.com/repos/blaynem/form-builder/issues/events{/number}",
      events_url: "https://api.github.com/repos/blaynem/form-builder/events",
      assignees_url: "https://api.github.com/repos/blaynem/form-builder/assignees{/user}",
      branches_url: "https://api.github.com/repos/blaynem/form-builder/branches{/branch}",
      tags_url: "https://api.github.com/repos/blaynem/form-builder/tags",
      blobs_url: "https://api.github.com/repos/blaynem/form-builder/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/blaynem/form-builder/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/blaynem/form-builder/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/blaynem/form-builder/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/blaynem/form-builder/statuses/{sha}",
      languages_url: "https://api.github.com/repos/blaynem/form-builder/languages",
      stargazers_url: "https://api.github.com/repos/blaynem/form-builder/stargazers",
      contributors_url: "https://api.github.com/repos/blaynem/form-builder/contributors",
      subscribers_url: "https://api.github.com/repos/blaynem/form-builder/subscribers",
      subscription_url: "https://api.github.com/repos/blaynem/form-builder/subscription",
      commits_url: "https://api.github.com/repos/blaynem/form-builder/commits{/sha}",
      git_commits_url: "https://api.github.com/repos/blaynem/form-builder/git/commits{/sha}",
      comments_url: "https://api.github.com/repos/blaynem/form-builder/comments{/number}",
      issue_comment_url: "https://api.github.com/repos/blaynem/form-builder/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/blaynem/form-builder/contents/{+path}",
      compare_url: "https://api.github.com/repos/blaynem/form-builder/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/blaynem/form-builder/merges",
      archive_url: "https://api.github.com/repos/blaynem/form-builder/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/blaynem/form-builder/downloads",
      issues_url: "https://api.github.com/repos/blaynem/form-builder/issues{/number}",
      pulls_url: "https://api.github.com/repos/blaynem/form-builder/pulls{/number}",
      milestones_url: "https://api.github.com/repos/blaynem/form-builder/milestones{/number}",
      notifications_url: "https://api.github.com/repos/blaynem/form-builder/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/blaynem/form-builder/labels{/name}",
      releases_url: "https://api.github.com/repos/blaynem/form-builder/releases{/id}",
      deployments_url: "https://api.github.com/repos/blaynem/form-builder/deployments",
      created_at: "2017-05-27T15:13:44Z",
      updated_at: "2017-05-27T15:14:06Z",
      pushed_at: "2017-06-07T16:35:36Z",
      git_url: "git://github.com/blaynem/form-builder.git",
      ssh_url: "git@github.com:blaynem/form-builder.git",
      clone_url: "https://github.com/blaynem/form-builder.git",
      svn_url: "https://github.com/blaynem/form-builder",
      homepage: null,
      size: 93,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      open_issues_count: 1,
      license: null,
      forks: 1,
      open_issues: 1,
      watchers: 0,
      default_branch: "master"
      }
  ]
}

export default function searchData(state = INITIAL_STATE, action){
  switch(action.type){
    case STOREUSERDATA:
      return {
        ...state,
        userData: action.payload
      }

    case STOREREPODATA:
      return {
        ...state,
        userRepos: action.payload
      }
    
    default:
      return state;
  }
} 