/*

  const patients = [
    {
      name: 'Luiz',
      age: 20,
      weight: 100,
      height: 190,
    },
    {
      name: 'Alexandra',
      age: 27,
      weight: 70,
      height: 170,
    },
    {
      name: 'Carlos',
      age: 42,
      weight: 90,
      height: 180,
    }
  ]

* Dada uma lista de pacientes, crie uma função para calcular o IMC de cada paciente e mostre a seguinte mensagem:
"Paciente ${patientName} possui o IMC de: ${imc}."

*/

const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180,
  }
]

function IMCcalc(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(1)
}

function printPatientIMC(patient) {
  return `
  Paciente ${patient.name} possui o IMC de: ${IMCcalc(patient.weight, patient.height)}`
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}