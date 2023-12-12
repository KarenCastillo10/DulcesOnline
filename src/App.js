import React,{Fragment} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CrearCuenta from "./Paginas/auth/CrearCuenta";
import Login from "./Paginas/auth/login";
import Home from "./Paginas/Home";
import ProyectosAdmin from "./Paginas/ProyectoAdmin/ProyectosAdmin";
import ProductosCrear from "./Paginas/ProyectoAdmin/ProductosCrear";
import ProductosEditar from "./Paginas/ProyectoAdmin/ProductosEditar";
import ProyectoCompra from './Paginas/ProyectoCompra.js/ProyectoCompra';
import HomeCompra from "./Paginas/HomeCompra";
import Verificacion from "./Paginas/auth/verificacion";

function App(){
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element ={<Login/>}/>
          <Route path="crear-cuenta" exact element ={<CrearCuenta/>}/>
          <Route path="/home" exact element ={<Home/>}/>
          <Route path="/homecompra" exact element ={<HomeCompra/>}/>
          <Route path="/proyectos-admin" exact element ={<ProyectosAdmin/>}/>
          <Route path="/produtos/crear" exact element ={<ProductosCrear/>}/>
          <Route path="/produtos/editar/:idproducto" exact element ={<ProductosEditar/>}/>
          <Route path="/proyectos-compra" exact element ={<ProyectoCompra/>}/>
          <Route path="/verificacion" exact element ={<Verificacion/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;