import { type } from '@testing-library/user-event/dist/type'
import { useState } from 'react'
const ExerciseOne = () => {
  const [notas, setNotas] = useState(' ')
  const [sum, setSum] = useState()
  const arrayOfStrings = (notas.split(' '))
  const arrayNumbers = arrayOfStrings.map(function(item) {return parseInt(item, 10)})
  const sumAllItens = (arrayNumbers) => {
    var allSum = 0 
    for(var i = 0; i < arrayNumbers.length; i++) {
      allSum += arrayNumbers[i]
    }
    return allSum / arrayNumbers.length
  }
  
  const sumAndMedia = sumAllItens(arrayNumbers)

  
  
  


  return (
    <div>
      <h1>Exercicio 1 - Calcular média de notas</h1>
      <input type='text' value={notas} onChange={e => setNotas(e.target.value)}/>

      <p>Média = {sumAndMedia} </p>
    </div>
  )
}

export default ExerciseOne