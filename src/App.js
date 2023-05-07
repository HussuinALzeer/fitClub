import { Routes,Route } from 'react-router-dom';
import Hero from './components/hero/Hero';

import './App.css';

import Footer from './components/footer/Footer';
import Strenth from './components/PlanesMap/strenth/Strenth';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route  path='' element={<Hero/>}  />
        <Route path='/strenth' element={<Strenth/>} />
      </Routes>
    </div>
  );
}

export default App;
