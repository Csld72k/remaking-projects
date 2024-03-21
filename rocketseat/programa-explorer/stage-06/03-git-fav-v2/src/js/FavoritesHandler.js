import { FavoritesData } from "./FavoritesData.js"

export class FavoritesHandler extends FavoritesData {

  constructor(root) {

    super(root)
    this.filledTbody = this.root.querySelector("tbody.filled-list")
    this.emptyTbody = this.root.querySelector("tbody.empty-list")
    this.update()
    this.searchUser()

  }

  update() {

    this.removeAllUsers()

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

    this.toggleTableBackground()

  }

  toggleTableBackground() {

    if (this.users.length === 0) {

      this.emptyTbody.classList.remove("disabled")
      this.filledTbody.classList.add("disabled")

    } else {

      this.emptyTbody.classList.add("disabled")
      this.filledTbody.classList.remove("disabled")

    }

  }

  createRow() {

    const userDataRow = document.createElement("tr")
    userDataRow.innerHTML = `
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

    return userDataRow

  }

  removeAllUsers() {

    this.filledTbody.querySelectorAll("tr").forEach(user => user.remove())

  }

  searchUser() {

    const buttonSearch = document.querySelector(".search-user")

    buttonSearch.onclick = (event) => {

      event.preventDefault()
      const usernameToSearch = document.querySelector("#github-username").value
      this.addUser(usernameToSearch)

    }
  }
}