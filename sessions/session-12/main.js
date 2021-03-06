console.log("Session 12 Exercises")

let arrayPersonas = [
  {
    name: "Phibee",
    age: 25,
    voted: true,
    gender: "mujer",
  },
  {
    name: "Katrinka",
    age: 26,
    voted: false,
    gender: "mujer",
  },
  {
    name: "Bruno",
    age: 48,
    voted: false,
    gender: "hombre",
  },
  {
    name: "Jon",
    age: 22,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Brian",
    age: 20,
    voted: false,
    gender: "hombre",
  },
  {
    name: "Eugene",
    age: 38,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Big Bob",
    age: 29,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Ximena",
    age: 40,
    voted: false,
    gender: "mujer",
  },
  {
    name: "Paulet",
    age: 37,
    voted: false,
    gender: "mujer",
  },
  {
    name: "Harold",
    age: 45,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Gerald",
    age: 22,
    voted: false,
    gender: "hombre",
  },
  {
    name: "Arnold",
    age: 35,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Gelga",
    age: 28,
    voted: true,
    gender: "mujer",
  },
  {
    name: "Lila",
    age: 18,
    voted: true,
    gender: "mujer",
  },
  {
    name: "Rhonda",
    age: 18,
    voted: true,
    gender: "mujer",
  },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron
- la edad promedio de todos los vacunados
- un array con aquellas personas que se vacunaron y 
que son menores a 30 años
- la edad promedio de los no vacunados
- el porcentaje de vacunados vs no vacunados
- el procentaje de mujeres que se vacunaron
- el porcentaje de los hombres que vacunarion
*/

//Un array con aquellas personas que no se vacunaron

const obtenerPersonasNoVacunadas = () => {
  return arrayPersonas.reduce((vacunadosArray, currentPerson) => {
    return !currentPerson.voted === true
      ? vacunadosArray.concat(currentPerson)
      : vacunadosArray
  }, [])
}

// Un array con aquellas personas que se vacunaron

const obtenerPersonasVacunadas = () => {
  return arrayPersonas.reduce((vacunadosArray, currentPerson) => {
    return currentPerson.voted === true
      ? vacunadosArray.concat(currentPerson)
      : vacunadosArray
  }, [])
}

// - la edad promedio de todos los vacunados

const obtenerEdadPromedioVacunados = () => {
  const vacunados = obtenerPersonasVacunadas()
  return vacunados.reduce((edadPromedio, personaActual) => {
    return Math.round((edadPromedio += personaActual.age / vacunados.length))
  }, 0)
}

// - un array con aquellas personas que se vacunaron y
// que son menores a 30 años

const vacunadosMenoresATreinta = () => {
  return arrayPersonas.reduce((vacunadosArray, currentPerson) => {
    return currentPerson.voted === true && currentPerson.age < 30
      ? vacunadosArray.concat(currentPerson)
      : vacunadosArray
  }, [])
}

// - la edad promedio de los no vacunados

const edadPromedioNoVacunados = () => {
  const noVacunados = obtenerPersonasNoVacunadas()
  return noVacunados.reduce((edadPromedio, personaActual) => {
    return Math.round((edadPromedio += personaActual.age / noVacunados.length))
  }, 0)
}

// - el porcentaje de vacunados vs no vacunados

const getPercentage = (number1, number2) => {
  return (number1 / number2) * 100
}

const obtenerPorcentajesVacunados = () => {
  const totalPersonas = arrayPersonas.length
  const vacunados = obtenerPersonasVacunadas().length
  const noVacunados = obtenerPersonasNoVacunadas().length
  const porcentajeVacunados = getPercentage(vacunados, totalPersonas)
  const porcentajeNoVacunados = getPercentage(noVacunados, totalPersonas)

  return `El porcentaje de personas vacunadas es de: ${porcentajeVacunados}%. El porcentaje de no vacunados es de: ${porcentajeNoVacunados}%`
}

// - el procentaje de mujeres que se vacunaron

const porcentajeMujeresVacunadas = () => {
  return arrayPersonas
    .filter((persona) => {
      return persona.gender === "mujer"
    })
    .reduce((porcentaje, mujerActual, indiceMujer, arrayMujeres) => {
      let mujeresVacunadas = 0
      if (mujerActual.voted === true) {
        mujeresVacunadas += 1
        return porcentaje + (mujeresVacunadas / arrayMujeres.length) * 100
      } else {
        return porcentaje
      }
    }, 0)
}

// - el porcentaje de los hombres que se vacunaron

const porcentajeHombresVacunados = () => {
  return arrayPersonas
    .filter((persona) => {
      return persona.gender === "hombre"
    })
    .reduce((porcentaje, hombreActual, indiceHombre, arrayHombres) => {
      let hombresVacunados = 0
      if (hombreActual.voted === true) {
        hombresVacunados += 1
        return porcentaje + (hombresVacunados / arrayHombres.length) * 100
      } else {
        return porcentaje
      }
    }, 0)
}
