import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rutas from './components/Rutas';


function App() {
  return (
    <Router>
      <Navbar />
      <Rutas/>
    </Router>
  );
}

export default App;
