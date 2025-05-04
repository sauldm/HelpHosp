import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pedidos from './pages/Pedidos';
import Pagos from './pages/Pagos';
import Estadisticas from './pages/Estadisticas';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>
    </Router>
  );
}

export default App;
