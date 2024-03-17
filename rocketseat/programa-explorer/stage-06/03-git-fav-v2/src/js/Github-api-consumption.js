export class GithubAPIConsumption {

  static Search(username) {

    return fetch(`https://api.github.com/users/${username}`).then(data => data.json().then(({ login, name, public_repos, followers }) => ({ login, name, public_repos, followers })))

  }
}