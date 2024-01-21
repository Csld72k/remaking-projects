// Lembrar de deixar esse código todo comentado para um estudo futuro

class Patient {
	constructor(name, age, weight, height) {
		this.name = name
		this.age = age
		this.weight = weight
		this.height = height
	}
}

let patientList = []
patientList[0] = new Patient("Claudiney", 26, 100, 190)
patientList[1] = new Patient("Letícia", 24, 60, 180)
patientList[2] = new Patient("  Noah Flint    Sebastian Michaelis", 44, 80, 18)
patientList[3] = new Patient("Claudiney Silva Leite Dutra", 26, 50, 198)
patientList[4] = new Patient("Claudiney Fagundes Franciscano", 29, 50, 198)
patientList[5] = new Patient("Letícia Silva Fernandes", 26, 50, 198)
patientList[6] = new Patient("Letícia Nogueira de Almeida", 22, 40, 160)

let regexLetters = new RegExp("^[a-záàâãéèêíïóôõöúçñ ]+$", "i")
let regexNumbers = new RegExp("^[0-9\b]+$")

function getName() {
	let name = prompt("Digite o nome do(a) paciente.")
	if (name.length < 3 || name === undefined) {
		alert("É estritamente necessário que o nome do(a) paciente seja digitado.")
		getName()
	}
	if (!regexLetters.test(name)) {
		alert("O nome do(a) paciente não pode conter números ou caracteres especiais, apenas letras.")
		getName()
	}

	name = capitalizesFirstLetterLowercaseRest(name)

	return name
}

function getAge(patientName) {
	let age = prompt(`Digite a idade do(a) ${patientName}`)
	if (age.length === 0 || age === undefined || !regexNumbers.test(age)) {
		alert("Entrada inválida. Digite apenas números")
		getAge(patientName)
	}
	return Number(age)
}

function getWeight(patientName) {
	let weight = prompt(`Digite o peso do(a) ${patientName} em quilogramas.`)
	if (weight.length === 0 || weight === undefined || !regexNumbers.test(weight)) {
		alert("Entrada inválida. Digite apenas números.")
		getWeight(patientName)
	}
	return Number(weight)
}

function getHeight(patientName) {
	let height = prompt(`Digite a altura do(a) ${patientName} em centímetros.`)
	if (height.length === 0 || height === undefined || !regexNumbers.test(height)) {
		alert("Entrada inválida. Digite apenas números.")
		getHeight(patientName)
	}
	return Number(height)
}

function registerPatient() {
	const patient = new Patient()

	patient.name = getName()
	patient.age = getAge(patient.name)
	patient.weight = getWeight(patient.name)
	patient.height = getHeight(patient.name)

	patientList.push(patient)
	mainMenu()
}

function removeWhitespaces(patientName) {
	let list = []
	//patientName = patientName.split(" ")
	for (let name of patientName) {
		if (name.length !== 0) list.push(name)
	}

	return list
}

function capitalizesFirstLetterLowercaseRest(patientName) {
	//removeWhitespaces(patientName)

	let list = []
	/*patientName = patientName.split(" ")
	for (let name of patientName) {
			if (name.length !== 0) {
			//Aqui removo os espaços em branco
			name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
			list.push(name)
			}
	}*/
	patientName = patientName.split(" ")
	for (let name of patientName) {
		if (name === "da" || name === "das" || name === "de" || name === "do" || name === "dos") list.push(name.toLowerCase())
		else list.push(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

	}

	return removeWhitespaces(list).join(" ")
}

function showPatients(list) {
	let listToShow = []

	for (let patient of list) {
		patient.name = //capitalizesFirstLetterLowercaseRest(patient.name)
			listToShow.push(`Nome: ${patient.name} Idade: ${patient.age} Peso: ${patient.weight} Altura: ${patient.height}
			`)

	}

	listToShow = listToShow.join("\n") // O "\n" serve para dar break role (quebra de linha)

	return listToShow
}

function searchByName() {
	let list = []
	let nameToSearch = prompt("Digite o nome que deseja buscar.")

	if (regexLetters.test(nameToSearch) && typeof nameToSearch === "string" && nameToSearch.trim().length > 0) {
		for (let patient of patientList) {

			if (patient.name.toLowerCase().includes(nameToSearch.toLowerCase())) list.push(patient)

		}

		if (list.length === 0) {
			alert("Paciente não encontrado.")
			mainMenu()
		} else {
			alert(showPatients(list))
			mainMenu()
		}
	} else {
		alert("Digite uma opção válida.")
		searchByName()
	}

}

function searchByAge() {
	let list = []
	let ageToSearch = Number(prompt("Digite a idade que deseja buscar."))

	if (regexNumbers.test(ageToSearch) && ageToSearch > 0) {
		for (let patient of patientList) {
			if (patient.age === ageToSearch) list.push(patient)
		}

		if (list.length === 0) {
			alert("Paciente não encontrado.")
			mainMenu()
		} else {
			alert(showPatients(list))
			mainMenu()
		}

	} else {
		alert("Digite uma idade válida a partir de 1 ano.")
		searchByAge()
	}

}
function searchByWeight() {
	let list = []
	let weightToSearch = Number(prompt("Digite o peso que deseja buscar."))

	if (regexNumbers.test(weightToSearch) && weightToSearch > 0) {
		for (let patient of patientList) {
			if (patient.weight === weightToSearch) list.push(patient)
		}

		if (list.length === 0) {
			alert("Paciente não encontrado.")
			mainMenu()
		} else {
			alert(showPatients(list))
			mainMenu()
		}
	} else {
		alert("Digite um peso válido a partir de 1 quilo.")
		searchByWeight()
	}
}
function searchByHeight() {
	let list = []
	let heightToSearch = Number(prompt("Digite a altura que deseja buscar."))

	if (regexNumbers.test(heightToSearch) && heightToSearch > 0) {
		for (let patient of patientList) {
			if (patient.height === heightToSearch) list.push(patient)
		}

		if (list.length === 0) {
			alert("Paciente não encontrado.")
			searchByHeight()
		} else {
			alert(showPatients(list))
			mainMenu()
		}
	} else {
		alert("Digite uma altura válida a partir de 1 .")
		searchByHeight()
	}
}

function showSpecificPatient() {
	let options = Number(prompt(`
		Escolha uma opção.

		  1. Buscar por nome.
		  2. Buscar por idade.
		  3. Buscar por peso.
		  4. Buscar por altura.
		  5. Voltar.
		`))

	switch (options) {
		case 1:
			searchByName()
			break
		case 2:
			searchByAge()
			break
		case 3:
			searchByWeight()
			break
		case 4:
			searchByHeight()
			break
		case 5:
			consultPatientList()
			break
		default:
			alert("Digite uma opção válida.")
			showSpecificPatient()
	}
}

function consultPatientList() {
	if (patientList.length === 0) alert("Ainda não existem pacientes cadastrados.")
	else {
		let options = Number(prompt(`
				Escolha uma opção.

				  1. Mostrar todos os pacientes.
				  2. Buscar por paciente específico.
				  3. Voltar.
				`))

		switch (options) {
			case 1:
				alert(showPatients(patientList))
				mainMenu()
				break
			case 2:
				showSpecificPatient()
				break
			case 3:
				mainMenu()
				break
			default:
				alert("Digite uma opção válida!")
				consultPatientList()
		}
	}
}

function mainMenu() {
	menu = Number(prompt(`
				Olá usuário, digite o número da opção desejada.

				  1. Cadastrar paciente.
				  2. Consultar lista de pacientes.
				  3. Sair.
				`))

	switch (menu) {
		case 1:
			registerPatient()
			break
		case 2:
			consultPatientList()
			break
		case 3:
			break
		default:
			alert("Digite uma opção válida!")
			mainMenu()
	}
}

mainMenu()