import Header from './components/Header/header';
import Home from './components/Home/Home';
import Champions from './components/Champions/Champions';
import Gallery from './components/Gallery/Gallery';
import Players from './components/Players/Players';
import Plays from './components/Plays/Plays';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <Champions/>
        <Gallery/>
        <Players/>
        <Plays/>
      </main>
      <Footer/>
    </>
  )
}

export default App
