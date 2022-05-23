// sass
import './aside.sass'

// context
import { DataContext } from '../../contexts/DataContext'

// hook
import { useContext } from 'react'


const Aside = () => {

  const {data, plantationsData, rain} = useContext(DataContext)

  if (!data || !plantationsData || !rain) {
    return
  }


  return (
    <aside className="aside">
      <div className="f">
        <label>Fazenda</label>
        <p>{data.farm.name}</p>
        <p className="t">{plantationsData.results.length} talhões</p>
      </div>
      <hr />
      <div className="dvsrup">
        <div className="dvs">
          <div className="dv">
            <label>Data da visita</label>
            <p>{data.details.date.split('-').reverse().join('/')}</p>
          </div>
          <div className="s">
            <label>Safra</label>
            <p>{data.harvest.name}</p>
          </div>
        </div>
        <div className="rup">
          <div className="r">
            <label>Realizada por</label>
            <p>{data.owner.name}</p>
          </div>
          <div className="u">{data.owner.initials}</div>
          <div className="p">
            <label>Pluviometria</label>
            <p><i className="fa-solid fa-droplet"></i>{rain.rain_until_date} mm</p>
            <p className="p">Acumulado na safra</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="os">
        <label>Observações</label>
        <p>{data.details.observation}</p>
      </div>
      <hr />
      <div className="b">
        <button><i className="fa-solid fa-print"></i>IMPRIMIR</button>
      </div>
    </aside>
  )
}

export default Aside