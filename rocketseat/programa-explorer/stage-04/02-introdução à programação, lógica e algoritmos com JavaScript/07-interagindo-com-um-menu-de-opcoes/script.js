/*

	* Faça um programa que tenha um menu a apresente a seguinte mensagem:
	"Olá usuário! Digite o número da opção desejada.
		1.  Cadastrar um item na lista
		2.  Mostrar itens cadastrados
		3.  Sair do programa".
		  
	* Caso o usuário digite 1, ele poderá cadastrar um item à lista. Em seguida mostre a seguinte mensagem:
	"${item} foi adicionado à lista.". 

	* Caso o usuário digite 2, ele poderá ver os itens da lista.

	* Caso o usuário digite 3, encerre a aplicação e mostre a seguinte mensagem:
	"Aplicação encerrada.".

	* A primeira letra do primeiro item deve ser maiúscula e todas as demais letras de todos os itens devem ser minúsculas.

	* Caso o usuário digite espaço em branco no primeiro e/ou último caractere, remova esse espaço em branco.

*/

let option
let list = []

while (option != 3) {

	option = Number(prompt(`Olá usuário. Digite o número da opção desejada.

    1.  Cadastrar um item na lista
    2.  Mostrar itens cadastrados
    3.  Sair do programa`))

	if (option === 1) {
		let item = prompt("Digite o item que deseja adicionar à lista.")

		item = item.trim()  //  Remove os espaços em branco no começo e/ou final do texto

		if (list.length === 0) item = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()  //  Paga a primeira letra da string e coloca e maiúscula e o restante em minúscula
		else item = item.toLowerCase()

		list.push(item)
		alert(`${item} foi adicionado à lista.`)

	} else if (option === 2) {
		if (list.length === 0) alert("Ainda não existem itens cadastrados")
		else alert(list.join(", "))
	} else if (option != 3) alert("Entrada inválida, digite uma opção válida")
}

alert("Aplicação encerrada.")