console.log("Ejercicios Sesion 4 Ciclos")
/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

function multiplyTable(number) {
  number = Number(prompt("Elige un numero entre 1 y 10: "))

  for (let i = 1; i <= 10; i++) {
    console.log(
      `La tabla de multiplicar de ${number} es igual a ${number} x ${i}  = ${
        number * i
      }`
    )
  }
}

/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

function checkForPairNumbers(number) {
  do {
    number = Number(prompt("Elige un numero entre 10 y 100:"))
  } while (number < 10 || number > 100 || isNaN(number))

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

// Solucion 1

function sumTotal(quantity) {
  do {
    quantity = Number(prompt("Introduce una cantidad: "))
  } while (quantity < 0 || isNaN(quantity))

  const arrayOfNumbers = Array.from(String(quantity), Number)

  console.log(arrayOfNumbers.reduce((a, b) => a + b, 0))
}

// Solucion 2

function sumTotal2(quantity) {
  quantity = prompt("Introduce una cantidad: ")

  const arrayOfNumbers = quantity.split("")

  console.log(arrayOfNumbers)

  sum = 0

  for (i = 0; i < arrayOfNumbers.length; i++) {
    sum += Number(arrayOfNumbers[i])
  }
  console.log(sum)
}

/*
Ejercicio 4:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

function printTriangle(hash) {
  hash = "*"

  for (let i = 0; i < 10; i++) {
    console.log(hash)
    hash += "*"
  }
}