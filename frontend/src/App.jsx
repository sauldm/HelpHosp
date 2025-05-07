import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Rutas from "./components/Rutas";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="pagina">
      <Router>
        <Header />
        <div className="contenedor">
          <Navbar />
          <Rutas />
        </div>
      </Router>
    </div>
  );
}

export default App;
