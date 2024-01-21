/*

  * Capture 10 itens para compor a lista de um supermercado.

  * Mostre a lista após obter todos o 10 itens.

*/

let itemsList = []

for (let i = 0; i < 10; i++) {
  itemsList[i] = prompt(`Digite o ${i + 1}º item`)
}

alert(itemsList.join(", "))