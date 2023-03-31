import logo from './logo.svg';
import './App.css';
import Navmenu from './components/Navmenu.jsx'
import Burgermenu from './components/Burgermenu.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Doing from './components/Doing.jsx'
import Qwerty from './components/Qwerty.jsx'
import Advantages from './components/Advantages.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="App">
        <Navmenu/>
        <Burgermenu/>
        <Main/>
        <About/>
        <Doing/>
        <Qwerty/>
        <Advantages/>
        <Portfolio/>
        <Contact/>
    </div>
  );
}

export default App;
