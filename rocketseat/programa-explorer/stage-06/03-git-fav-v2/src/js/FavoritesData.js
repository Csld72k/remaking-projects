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

}