import { FavoritesData } from "./FavoritesData.js"

export class FavoritesHandler extends FavoritesData {

  constructor(root) {

    super(root)
    this.filledTbody = this.root.querySelector("tbody.filled-list")

  }


  createRow() {

    const row = `
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

    this.filledTbody.createElement(row)

  }

}