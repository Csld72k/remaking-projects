import { GithubUser } from "./GithubUser.js"

export class Favorites {

  constructor(root) {

    this.root = document.querySelector(root)
    this.load()

  }

  load() {

    this.users = JSON.parse(localStorage.getItem("@github-favorites:")) || []

  }

  save() {

    localStorage.setItem("@github-favorites:", JSON.stringify(this.users))

  }

  async add(userName) {

    try {

      const userIsAlreadyRegistered = this.users.find(user => user.login === userName)

      if (userIsAlreadyRegistered) throw new Error("User is already registered!")

      const user = await GithubUser.search(userName)

      if (user.login === undefined) throw new Error("User not found!")

      this.users = [user, ...this.users]
      this.update()
      this.save()

    } catch (error) {

      alert(error.message)

    }
  }

  delete(userToDelete) {

    this.users = this.users.filter(user => userToDelete.login !== user.login)
    this.update()
    this.save()

  }
}

export class FavoritesView extends Favorites {

  constructor(root) {

    super(root)

    this.tbody = this.root.querySelector("table tbody")
    this.update()
    this.onAdd()

  }

  onAdd() {
    const addButton = this.root.querySelector(".search button")
    addButton.onclick = () => {

      const { value } = this.root.querySelector(".search input")

      this.add(value)
    }
  }

  update() {

    this.removeAllUsers()
    this.users.forEach(user => {
      const row = this.createRow()
      row.querySelector(".user img").src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `${user.name} image`
      row.querySelector(".user a").href = `https://github.com/${user.login}`
      row.querySelector(".user p").textContent = user.name
      row.querySelector(".user span").textContent = user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers

      row.querySelector(".remove").onclick = () => {

        const confirmUserDeletion = confirm("Are you sure you want to remove this user?")

        if (confirmUserDeletion) this.delete(user)
        this.update()
      }

      this.tbody.append(row)

    })
  }

  createRow() {

    const tr = document.createElement("tr")
    tr.innerHTML = `
        <td class="user">
          <img src="" alt="">
          <a href="" target="_blank">
            <p></p>
            <span></span>
          </a>
        </td>
        <td class="repositories"></td>
        <td class="followers"></td>
        <td><button class="remove">&times;</button></td>
      `
    return tr

  }

  removeAllUsers() {

    this.tbody.querySelectorAll("tr").forEach((tr) => tr.remove())

  }
}