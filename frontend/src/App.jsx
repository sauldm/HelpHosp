import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rutas from './components/Rutas';
import "./App.css";

function App() {
  return (
    <div className='contenedor'>
      <Router>
        <Rutas/>
      </Router>
    </div>
  );
}

export default App;
