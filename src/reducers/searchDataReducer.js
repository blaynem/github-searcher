import { STOREUSERDATA } from '../constants';

const INITIAL_STATE = {
  loading: false,
  data: {
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
  }
}

export default function searchData(state = INITIAL_STATE, action){
  switch(action.type){
    case STOREUSERDATA:
      return {
        ...state,
        data: action.payload
      }
    
    default:
      return state;
  }
} 