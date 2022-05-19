// sass
import './App.sass';
import Footer from './components/footer/Footer';

// components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Load from './components/load/Load';

// hook
import {useContext} from 'react'
import {DataContext} from './contexts/DataContext'


function App() {

  const {load, notesLoad, plantationsLoad} = useContext(DataContext)

  return (
    <div className="App">
      {load || notesLoad || plantationsLoad ? <Load /> : [<Header />, <Main />, <Footer />]}
    </div>
  );
}

export default App;
