/*

! Organizar os comentários na ordem mais adequada.



* Faça um programa que tenha um menu a apresente a seguinte mensagem:
  "Olá usuário, digite o número da opção desejada.

    1.  Cadastrar paciente.
    2.  Listar pacientes.
    3.  Sair.".
      
* Caso o usuário digite 1, ele poderá cadastrar um paciente no sistema. Devem ser coletados o nome completo, idade, peso e altura do paciente. Em seguida mostre a seguinte mensagem:
  "${firstName} foi cadastrado no sistema."

* Caso o usuário digite 2, ele poderá listar os pacientes. O sistema deve disponibilizar as opções de listar todos os pacientes ou buscar por dados específicos como nome, idade, peso e altura.

* Caso o usuário digite 3, encerre a aplicação e mostre a seguinte mensagem:
  "Aplicação encerrada.".

* Caso o usuário digite espaço em branco no primeiro e/ou último caractere, remova esse espaço em branco.

* O sistema deve ter uma opção de voltar ao menu anterior em cada etapa diferente de seleção de opções e deve ser sempre a última opção.

*	A primeira letra de cada nome e sobrenome devem ser maiúsculas e as demais minúsculas, exceto da/das/de/do/dos.

*/

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

let regexLetters = new RegExp("^[a-záàâãéèêíïóôõöúçñ ]+$", "i") /*  Regex para aceitar apenas caracteres alfabéticos com acentuação e espaço. */
let regexNumbers = new RegExp("^[0-9\b]+$") /*  Regex para aceitar apenas caracteres numéricos. */
/* RegeExp ou regex, Expressões Regulares em português, são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. Elas podem ser utilizadas com os métodos exec() e test() do objeto RegExp(), e com os métodos match(), replace(),search(), e split() do objeto String.  */

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

function capitalizesFirstLetterLowercaseRest(oldPatientName) {
  let newPatientName = []

  oldPatientName = oldPatientName.split(" ").filter(value => value != "")	/*	Nessa linha de código, remove os espaços em branco desnecessários adicionados pelo usuário. No método filter() foi passada uma arrow function onde value é o valor de cada índice do array oldPatientName e ao percorrer cada valor, retornará apenas o que for diferente de "" que representa o espaço em branco	*/

  for (let name of oldPatientName) {
    if (name === "da" || name === "das" || name === "de" || name === "do" || name === "dos") newPatientName.push(name.toLowerCase())
    else newPatientName.push(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
  }
  return newPatientName.join(" ")
}

function showPatients(list) {
  let listToShow = []

  for (let patient of list) {
    patient.name = capitalizesFirstLetterLowercaseRest(patient.name)
    listToShow.push(`${patient.name}, ${patient.age} anos, ${patient.weight}kg, ${patient.height}cm`)
  }

  listToShow = listToShow.join("\n") // O "\n" serve para dar uma break role (quebra de linha)

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
      mainMenu()
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
  let options = Number(prompt(`Escolha uma opção.

  1. Buscar por nome.
  2. Buscar por idade.
  3. Buscar por peso.
  4. Buscar por altura.
  5. Voltar.`))

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
    let options = Number(prompt(`Escolha uma opção.

  1.  Mostrar todos os pacientes.
  2.  Buscar por paciente específico.
  3.   Voltar.`))

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
  menu = Number(prompt(`Olá usuário, digite o número da opção desejada.

  1.  Cadastrar paciente.
  2.  Listar pacientes.
  3.  Sair.`))

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