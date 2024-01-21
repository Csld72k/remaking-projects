/*

  * Solicitar o nome do aluno e as suas 3 notas do bimestre e calcular a média desse aluno.

  * A média para ser aprovado deve ser de no mínimo 6.

  * Se o aluno for aprovado, mostrar uma mensagem com a nota e parabenizando-o.

  * Se reprovado, mostrar uma mensagem com a nota e motivá-lo a estudar para a prova de recuperação.

  * Em ambos os casos, mostre na mensagem o nome do aluno e a nota.

*/

let studentName = prompt("Qual o nome do(a) aluno(a)?")
let note1 = Number(prompt("Qual a primeira nota?"))
let note2 = Number(prompt("Qual a segunda nota?"))
let note3 = Number(prompt("Qual a terceira nota?"))

let notesAverage = ((note1 + note2 + note3) / 3).toFixed(1)

if (notesAverage > 6) alert(`Parabéns ${studentName}, você foi aprovado no bimestre com nota ${notesAverage}!`)
else alert(`${studentName}, infelizmente você foi reprovado no bimestre. Sua nota foi ${notesAverage}. Estude para passar na prova de recuperação!`)