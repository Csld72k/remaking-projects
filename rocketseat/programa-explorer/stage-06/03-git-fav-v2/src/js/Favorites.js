export class Favorites {

  constructor(root) {

    this.root = document.querySelector(root)
    this.load()

  }

  load() {

    this.users = [
      {
        login: "csld72k",
        name: "Claudiney Silva",
        public_repos: 1,
        followers: 2
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: 3,
        followers: 4

      }
    ]
  }

  delete(userToDelete) {

    const filteredUsersList = this.users.filter(user => user.login !== userToDelete.login)
    this.users = filteredUsersList

  }

}