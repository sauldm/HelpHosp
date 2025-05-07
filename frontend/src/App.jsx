import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rutas from "./components/Rutas";
import "./App.css";
import Header from "./components/Header";
import Empleados from "./components/Empleados";
import Contenido from "./components/Contenido";

function App() {
  return (
    <div className="pagina">
      <Router>
        <Header />
        <div className="body">
          <Navbar />
          <Contenido />
          <Empleados />
        </div>
      </Router>
    </div>
  );
}

export default App;
