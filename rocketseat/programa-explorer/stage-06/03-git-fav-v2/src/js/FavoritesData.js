export class Favorites {

  constructor(root) {

    this.root = document.querySelector(root)
    this.load()

  }

  load() {

    this.users = JSON.parse(localStorage.getItem("@github-favorites:")) || []

  }

  delete(userToDelete) {

    const filteredUsersList = this.users.filter(user => user.login !== userToDelete.login)
    this.users = filteredUsersList

  }

}