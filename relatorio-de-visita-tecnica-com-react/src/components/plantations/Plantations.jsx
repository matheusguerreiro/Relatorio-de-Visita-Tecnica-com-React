// sass
import './plantations.sass'

// hook
import { useContext, useState } from 'react'

// context
import { DataContext } from '../../contexts/DataContext'

// components
import Cards from '../cards/Cards'


const Plantations = ({plantation, i}) => {

  const {notesData} = useContext(DataContext)

  const [active, setActive] = useState(i === 0)

  const changeClassName = () => {
    setActive(!active)
  }
  
  if (!notesData) {
    return
  }

  const notesPlantationId = notesData.results.filter((npId) => {
    return npId.location_type === 'Plantation' && npId.location.id === plantation.id
  })


  return (
    <>
      <section className='plantations'>
        <div className="pi">
          <h3>{plantation.name}<span className='c'>{plantation.cycle}º ciclo</span></h3>
          <p>{plantation.variety.name} - {plantation.area} Ha</p>
          <div className="s">{plantation.state === 'active' ? 'Plantado' : '...'}</div>
        </div>
        <div className="pd">
          <div className="dldd">
            <div className="dl">
              <label>Data do Plantio</label>
              <label>Emergência</label>
              <label>Colheita</label>
            </div>
            <div className="dd">
              <p>{plantation.date.split('-').reverse().join('/')}</p>
              <p>{plantation.emergence_prediction_date.split('-').reverse().join('/')}</p>
              <p>{plantation.harvest_prediction_date.split('-').reverse().join('/')}</p>
            </div>
          </div>
          <div className="pb">
            <i onClick={changeClassName} className={active ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
          </div>
        </div>
      </section>
      {active && notesPlantationId.reverse().map((npId) => (
        <Cards note={npId} key={npId.id} />
      ))}
    </>
  )
}

export default Plantations