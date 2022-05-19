// sass
import './load.sass'

// gif
import gif from '../../images/loading-buffering.gif'

const Load = () => {
  return (
    <div className='load'>
      <div className="gh2">
        <img src={gif} alt="loadGif" />
        <h2>Carregando</h2>
      </div>
    </div>
  )
}

export default Load