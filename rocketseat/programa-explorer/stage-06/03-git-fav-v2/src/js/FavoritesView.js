import { Favorites } from "./Favorites.js"

export class FavoritesView extends Favorites {

  constructor(root) {
    super(root)

    this.update()

  }

  update() {

    this.removeAllUsers()

  }

  createRow() {

    const rowDataUser = document.createElement("tr")

    rowDataUser.innerHTML = `
    <td class="user">
      <img class="user-image" src="https://github.com/csld72k.png" alt="">
      <a href="https://github.com/csld72k">
        <span class="name">Claudiney Silva</span>
        <span class="username">/csld72k</span>
      </a>
    </td>

    <td class="repositories">
      34
    </td>

    <td class="followers">
      0
    </td>

    <td class="action">
      <button class="remove">Remove</button>
    </td>
    `

    return rowDataUser

  }

  removeAllUsers() {

    const tbody = this.root.querySelector("table tbody.filled-list")

    tbody.querySelectorAll("tr").forEach((row) => { row.remove() })

  }

}