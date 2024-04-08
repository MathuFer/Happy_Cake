import { Route, Routes as RouterRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";

export default function Routes(){
    return(
       <RouterRouter>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </RouterRouter>
    )
}