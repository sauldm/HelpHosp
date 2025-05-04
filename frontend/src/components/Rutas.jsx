import { Route, Routes } from "react-router-dom"
import Pedidos from "../pages/Pedidos"
import Pagos from '../pages/Pagos';
import Estadisticas from '../pages/Estadisticas';




const Rutas = ()=>{
    return(
        <Routes>
            <Route path="/pedidos" element={<Pedidos/>} />
            <Route path="/pagos" element={<Pagos/>} />
            <Route path="/estadisticas" element={<Estadisticas/>} />
        </Routes>
    )
}

export default Rutas