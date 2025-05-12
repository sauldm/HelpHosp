import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Empleados from "./components/Empleados";
import Contenido from "./components/Contenido";
import Header from "./components/Header";

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
