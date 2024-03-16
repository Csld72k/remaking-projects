export class GithubAPIConsumption {

  static search(userName) {

    return fetch(`https://api.github.com/users/${userName}`).then(data => data.json().then(({ login, name, public_repos, followers }) => ({ login, name, public_repos, followers })))

  }
}