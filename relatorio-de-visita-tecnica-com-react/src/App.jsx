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

  const {load, notesLoad, plantationsLoad, load2} = useContext(DataContext)

  return (
    <div className="App">
        {load || notesLoad || plantationsLoad || load2 ? <Load /> : [<Header key={0}/>, <Main key={1}/>, <Footer key={2}/>]}
    </div>
  );
}

export default App;
