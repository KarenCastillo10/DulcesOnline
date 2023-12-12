// ProyectosAdmin.js

import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke"; 
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";



const ProductosCompra = () => {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      obtenerProductos();
    }, []);
  
    const obtenerProductos = async () => {
      const response = await APIInvoke.invokeGET("/productos");
      setProductos(response);
    }

    useEffect(()=>{
      obtenerProductos();
    },[])
  
    const realizarCompra = async (id, nombre, precio, categoria, region) => {
      try {
  
        swal("Compra realizada", `Se ha comprado ${nombre} correctamente.`, "success");
      } catch (error) {
        // Manejo de errores en caso de que la compra falle
        console.error('Error al realizar la compra:', error);
        swal("Error", "Hubo un problema al realizar la compra.", "error");
      }
    };
  
    return (
      <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
          <ContentHeader
            Titulo={"Listado de Productos Tipicos"}
            breadcrumb1={"inicio"}
            breadcrumb2={"Productos"}
            ruta1={"/home"}
          />
          <section className="content">
            <div className="card">
              <div className="card-body">
                <table className="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Categoría</th>
                      <th>Región</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((producto) => (
                      <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.categoria}</td>
                        <td>{producto.region}</td>
                        <td>
                          <button
                            onClick={() => realizarCompra(
                              producto.id,
                              producto.nombre,
                              producto.precio,
                              producto.categoria,
                              producto.region
                            )}
                            className="btn btn-sm btn-primary"
                          >
                            Comprar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  };
  
  
  export default ProductosCompra;