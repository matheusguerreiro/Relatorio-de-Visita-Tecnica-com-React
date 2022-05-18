// css
import './header.sass'

// img
import logo from '../../images/logo-fb.png'


const Header = () => {
  return (
    <header className='header'>
      <div className="ih1">
        <i className="fa-solid fa-file-lines"></i>
        <h1>Relatório de visita técnica</h1>
      </div>
      <div className="logo">
        <img src={logo} alt="logo-fb" />
      </div>
    </header>
  )
}

export default Header