// sass
import './main.sass'

// components
import Aside from '../aside/Aside'
import Article from '../article/Article'


const Main = () => {
  
  return (
    <div className="main">
      <Aside />
      <Article />
    </div>
  )
}

export default Main