import { Favorites } from "./Favorites.js"

export class FavoritesView extends Favorites {

  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody.filled-list")
    this.update()

  }

  update() {

    this.removeAllUsers()

    this.users.forEach((user) => {

      const row = this.createRow()
      row.querySelector("img").src = `https://github.com/${user.login}.png`
      row.querySelector(".name").innerText = user.name
      row.querySelector(".username").innerText = user.login
      row.querySelector(".repositories").innerText = user.public_repos
      row.querySelector(".followers").innerText = user.followers

      this.tbody.append(row)

    })

  }

  createRow() {

    const rowDataUser = document.createElement("tr")

    rowDataUser.innerHTML = `
    <td class="user">
      <img class="user-image" src="https://github.com/csld72k.png" alt="Profile picture">
      <a href="https://github.com/csld72k">
        <span class="name">Claudiney Silva</span>
        <span class="username">/csld72k</span>
      </a>
    </td>

    <td class="repositories">
    </td>

    <td class="followers">
    </td>

    <td class="action">
      <button class="remove">Remove</button>
    </td>
    `

    return rowDataUser

  }

  removeAllUsers() {

    this.tbody.querySelectorAll("tr").forEach((row) => { row.remove() })

  }

}