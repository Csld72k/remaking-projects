export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
    // this.delete()
  }

  load() {

    this.users = [
      {
        login: "csld72k",
        name: "Claudiney Silva",
        public_repos: "34",
        followers: "1"
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: "76",
        followers: "1234321"
      }
    ]

  }

  delete(userToDelete) {
    const updatedUsers = this.users.filter(user => userToDelete.login !== user.login)

    this.users = updatedUsers

  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")
    this.update()

  }

  update() {

    this.removeAllUsers()
    this.users.forEach(user => {
      const row = this.createRow()
      row.querySelector(".user img").src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `${user.name} image`
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