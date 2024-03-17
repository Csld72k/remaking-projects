import { FavoritesData } from "./FavoritesData.js"

export class FavoritesHandler extends FavoritesData {

  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody.filled-list")
    this.update()
    this.searchUser()

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

      row.querySelector(".remove").onclick = () => {
        this.deleteUser(user)
        this.update()

      }
    })
  }

  searchUser() {

    const searchButton = document.querySelector(".search-user")

    searchButton.onclick = (event) => {

      event.preventDefault()
      const username = document.querySelector("#github-username").value
      this.addUser(username)

    }
  }

  createRow() {

    const rowDataUser = document.createElement("tr")

    rowDataUser.innerHTML = `
    <td class="user">
      <img class="user-image" src="" alt="Profile picture">
      <a href="">
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

    return rowDataUser

  }

  removeAllUsers() {

    this.tbody.querySelectorAll("tr").forEach((row) => { row.remove() })

  }
}