import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Smallcard } from './cards/Smallcard';
import Cards from './components/Cards';
import Carseoul from './components/Carseoul';
import Discover from './components/Discover';

function App() {
  return (
    < >
      <Navbar/>
      <Cards/>
      <Carseoul/>
      <Discover/>
    </>
  );
}

export default App;
