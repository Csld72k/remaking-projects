export class FavoritesData {

  constructor(root) {

    this.root = document.querySelector(root)
  }

  loadUsers() {

    this.users = JSON.parse(localStorage.getItem("@github-favorites:")) || []

  }

  saveUsers() {

    localStorage.setItem("@github-favorites:", JSON.stringify(this.users))

  }

  deleteUser(username) {

    const newUsersList = this.users.filter(user => user.login !== username)
    this.users = newUsersList
    this.saveUsers()
    this.update()

  }

}