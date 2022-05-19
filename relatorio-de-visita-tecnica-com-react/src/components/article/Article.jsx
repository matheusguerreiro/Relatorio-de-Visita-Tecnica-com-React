// css
import './article.sass'

// components
import Cards from '../cards/Cards'
import Plantations from '../plantations/Plantations'

// hooks
import { useContext } from 'react'

// context
import { DataContext } from '../../contexts/DataContext'


const Article = () => {
  
  const {notesData, plantationsData} = useContext(DataContext)

  if (!notesData || !plantationsData) {
    return
  }

  // console.log(notesData)
  // console.log(plantationsData)

  const notesFarm = notesData.results.filter((e) => {
    if (e.location_type === 'Farm') {
      return e
    }
    return false
  })

  const plantations = plantationsData.results.filter((p) => {
    return p
  })

  // console.log(notesFarm)
  // console.log(plantations)
  // console.log(notesPlantation)
  
  return (
    <article className="article">
      <h2>Anotações da fazenda</h2>
      {notesFarm ? notesFarm.map((n) => (
        <Cards note={n} key={n.id} />
      )) : 'Fazenda sem anotações...'}
      <h2>Eventos dos talhões</h2>
      {plantations ? plantations.map((p, i) => (
        <Plantations plantation={p} key={p.id} i={i} />
      )) : 'Talhões sem eventos...'}
    </article>
  )
}

export default Article