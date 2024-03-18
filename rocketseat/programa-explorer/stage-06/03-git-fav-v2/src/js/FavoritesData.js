import { GithubAPIConsumption } from "./Github-api-consumption.js"

export class FavoritesData {

  constructor(root) {

    this.root = document.querySelector(root)
    this.loadUsers()

  }

  loadUsers() {

    this.users = JSON.parse(localStorage.getItem("@github-favorites:")) || []

  }

  saveUsers() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.users))
  }

  deleteUser(userToDelete) {

    const filteredUsersList = this.users.filter(user => user.login !== userToDelete.login)
    this.users = filteredUsersList
    this.saveUsers()

  }

  async addUser(username) {

    try {

      const userIsAlreadyRegistered = this.users.find(user => user.login.toLowerCase() === username.toLowerCase())

      if (userIsAlreadyRegistered) throw new Error("User is already registered!")

      const newUser = await GithubAPIConsumption.Search(username)

      if (newUser.login === undefined) throw new Error("User not found!")

      this.users = [newUser, ...this.users]
      this.saveUsers()
      this.update()

    } catch (error) {

      alert(error.message)

    }
  }
}