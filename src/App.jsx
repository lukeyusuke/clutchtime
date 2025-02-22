import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Champions from './components/Champions/Champions';
import Gallery from './components/Gallery/Gallery';
import Players from './components/Players/Players';
import Plays from './components/Plays/Plays';
import Footer from './components/Footer/Footer';
import './App.css';
import './Reset.css';

function App() {

  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <Champions/>
        <Gallery/>
        <Players/>
        <Plays/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
