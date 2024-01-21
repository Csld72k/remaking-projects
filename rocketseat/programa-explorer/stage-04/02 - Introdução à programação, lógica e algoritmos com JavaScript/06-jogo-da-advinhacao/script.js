/*

  * Apresente a seguinte mensagem ao usuário:
  "Adivinhe, entre 0 e 10, em que número estou pensando.".

  * Crie uma lógica para gerar um número aleatório e verificar se o número que o usuário digitar é o mesmo que o sistema gerou.

  * Contabilize a quantidade de tentativas do usuário.

  * Enquanto o usuário não acertar o número, mostre a seguinte mensagem:
  "Resposta incorreta, tente novamente!".

  * Quando o usuário acertar o número, mostre a seguinte mensagem:
  "Parabéns! Você acertou o número em ${x} tentativas.".
  ? Se atente para a pluralidade da palavra "tentativa" colocando-a em singular ou plural de acordo com a necessidade gramatical.

  * Não contabilizar as tentativas caso o usuário tente prosseguir sem digitar dado algum e/ou digitar letra no campo de entrada ao invés de números. Nestes casos, mostre a seguinte mensagem:
  "É estritamente necessário que você digite um número para darmos prosseguimento!".

*/

let randomNumber = Number(Math.round(Math.random() * 10))
console.log(randomNumber)
let chosenNumber = Number(prompt("Adivinhe, entre 0 e 10, em que número estou pensando."))
let attempts = 0


function verifyIfAnswerIsEmpty() {
  chosenNumber.toString().length >= 1 && !isNaN(chosenNumber) ? verifyIfAnswerMatch() : tryAgain()
}

function verifyIfAnswerMatch() {
  attempts++
  attempts === 1 ? tries = "tentativa" : tries = "tentativas"

  if (chosenNumber === randomNumber) alert(`Parabéns! Você acertou o número em ${attempts} ${tries}`)
  else {
    chosenNumber = Number(prompt("Resposta incorreta, tente novamente!"))
    verifyIfAnswerIsEmpty()
  }
}

function tryAgain() {
  chosenNumber = Number(prompt("É estritamente necessário que você digite um número para darmos prosseguimento!"))
  verifyIfAnswerIsEmpty()
}

verifyIfAnswerIsEmpty()



