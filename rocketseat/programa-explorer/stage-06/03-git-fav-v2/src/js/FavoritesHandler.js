import { FavoritesData } from "./FavoritesData.js"

export class FavoritesHandler extends FavoritesData {

  constructor(root) {

    super(root)
    this.filledTbody = this.root.querySelector("tbody.filled-list")
    this.update()

  }

  update() {

    this.removeAllUsers()
    this.loadUsers()
    this.users.forEach(user => {

      const row = this.createRow()
      row.querySelector("img").src = `https://github.com/${user.login}.png`
      row.querySelector("a").src = `https://github.com/${user.login}`
      row.querySelector(".name").innerText = user.name
      row.querySelector(".username").innerText = user.login
      row.querySelector(".repositories").innerText = user.public_repos
      row.querySelector(".followers").innerText = user.followers
      row.querySelector(".remove").onclick = () => this.deleteUser(user.login)
      this.filledTbody.append(row)

    })
  }

  createRow() {

    const row = document.createElement("tr")
    row.innerHTML = `
    <td class="user">
      <img class="user-image" src="" alt="Profile picture">
      <a href="" target="_blank">
        <span class="name"></span>
        <span class="username"></span>
      </a>
    </td>

    <td class="repositories"></td>

    <td class="followers"></td>

    <td class="action">
      <button class="remove">Remove</button>
    </td>
    `

    return row

  }

  removeAllUsers() {
    this.filledTbody.querySelectorAll("tr").forEach(user => user.remove())
  }

}