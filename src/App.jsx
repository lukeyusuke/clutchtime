import Header2 from './components/Header2/Header2';
import Home from './components/Home/Home';
import Champions from './components/Champions/Champions';
import Gallery2 from './components/Gallery2/Gallery2';
import Players from './components/Players/Players';
import Plays from './components/Plays/Plays';
import Footer from './components/Footer/Footer';
import './App.scss';
import './Reset.scss';

function App() {
  return (
    <div>
      <Header2/>
      <main>
        <Home/>
        <Champions/>
        <Gallery2/>
        <Players/>
        <Plays/>
      </main>
      <Footer/>
    </div>
  )
}

export default App