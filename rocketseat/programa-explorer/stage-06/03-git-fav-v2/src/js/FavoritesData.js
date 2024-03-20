export class FavoritesData {

  constructor(root) {

    this.root = document.querySelector(root)

  }

  loadUsers() {

    this.users = JSON.parse(localStorage.getItem("@github-favorites:"))

  }

}