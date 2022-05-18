// css
import './plantations.sass'

// hook
import { useContext } from 'react'

// context
import { DataContext } from '../../contexts/DataContext'
import Cards from '../cards/Cards'


const Plantations = ({plantation}) => {

  // console.log(plantation)

  const {notesData} = useContext(DataContext)
  
  if (!notesData) {
    return
  }

  const notesPlantation = notesData.results.filter((np) => {
    if (np.location_type === 'Plantation' && np.location.id === plantation.id) {
      return np
    }
    return false
  })

  // console.log(notesPlantation)

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
          <div className="pb"><i className="fa-solid fa-angle-up"></i></div>
        </div>
      </section>
      {notesPlantation.reverse().map((np) => (
        <Cards note={np} key={np.id} />
      ))}
    </>
  )
}

export default Plantations