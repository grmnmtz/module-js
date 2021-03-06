console.log("Session 08 forEach scores exercise")

const mentorsArray = [
  {
    name: "Ivan Diaz",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 8,
      },
      {
        signature: "ReactJS",
        score: 8,
      },
    ],
  },
  {
    name: "Alan Medina",
    scores: [
      {
        signature: "HTML",
        score: 10,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Elvira Camarillo",
    scores: [
      {
        signature: "HTML",
        score: 9,
      },
      {
        signature: "CSS",
        score: 9,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 9,
      },
    ],
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
]

/* el promedio de las materias se saca con la suma del valor de todas las materias entre el numero total de materias. */

// // -Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

const promedioMateria = (mentorsArray, nombreMateria) => {
  let numeroDeMaterias = mentorsArray.length
  let suma = 0
  let promedio = 0

  mentorsArray.forEach((profesor) => {
    //Dentro de objeto profesor
    profesor.scores.forEach((materia) => {
      //Dentro de objeto materias
      if (materia.signature === nombreMateria) {
        suma += materia.score
      }
    })
    promedio = suma / numeroDeMaterias
  })

  return { materia: nombreMateria, promedio }
}

//Obtener la lista de mentores cuyo promedio sea mayor a 9.5

const obtenerLista = (mentorsArray) => {
  let suma = 0
  let cantidadDeMaterias = 4
  let promedio = 0

  const mayora = []

  const mentors = mentorsArray.forEach((profesor) => {
    //Dentro de objeto profesor
    suma = 0
    profesor.scores.forEach((materia) => {
      //Dentro de objeto materias
      cantidadDeMaterias = profesor.scores.length

      promedio = (suma += materia.score) / cantidadDeMaterias

      if (promedio > 9.5) {
        mayora.push({ name: profesor.name, promedio })
      }
    })
  })

  return mayora
}

// Obtener el promedio individual de cada mentor

const obtenerPromedioIndividual = (mentorsArray) => {
  const promedios = []
  mentorsArray.forEach((profesor) => {
    //Dentro de objeto profesor
    let suma = 0
    let promedio = 0
    profesor.scores.forEach((materia) => {
      //Dentro de objeto materias
      suma += materia.score
    })
    promedio = suma / profesor.scores.length
    promedios.push({ name: profesor.name, promedio })
  })

  return promedios
}

/* -crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio} 
*/

const createStringsArray = (mentorsArray) => {
  const profes = []

  mentorsArray.forEach((profesor) => {
    //Dentro de objeto profesor
    let suma = 0
    let promedio = 0

    profesor.scores.forEach((materia) => {
      //Dentro de objeto materias
      suma += materia.score
    })
    promedio = suma / profesor.scores.length
    profes.push(`Mi nombre es ${profesor.name} y mi promedio es de ${promedio}`)
  })
  return profes
}
