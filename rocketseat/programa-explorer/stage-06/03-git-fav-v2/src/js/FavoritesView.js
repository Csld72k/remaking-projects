import { Favorites } from "./Favorites.js"

export class FavoritesView extends Favorites {

  constructor(root) {
    super(root)

    this.update()

  }

  update() {

    this.removeAllUsers()

  }



  removeAllUsers() {

    const tbody = this.root.querySelector("table tbody.filled-list")

    tbody.querySelectorAll("tr").forEach((row) => { row.remove() })

  }

}