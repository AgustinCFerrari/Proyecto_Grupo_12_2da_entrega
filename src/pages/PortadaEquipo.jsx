// src/pages/PortadaEquipo.jsx
import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/PortadaEquipo.css"; // Se importa el nuevo archivo de estilos

const integrantes = [
  {
    nombre: "Flavio Benítez",
    imagen: "/images/flavio.jpg",
    ruta: "/flavio"
  },
  {
    nombre: "Agustín Ferrari",
    imagen: "/images/agustin.jpg",
    ruta: "/agustin"
  },
  {
    nombre: "Sergio Godoy",
    imagen: "/images/sergio.jpg",
    ruta: "/sergio"
  }
];

const PortadaEquipo = () => {
  return (
    <div className="portada-container">
      <h1 className="portada-titulo">Bienvenidos, conozca a nuestro equipo de trabajo</h1>
      <div className="tarjetas-container">
        {integrantes.map((miembro, index) => (
          <Link key={index} to={miembro.ruta} className="tarjeta-link">
            <div className="tarjeta">
              <img
                src={miembro.imagen}
                alt={miembro.nombre}
                className="tarjeta-imagen"
              />
              <h3 className="tarjeta-nombre">{miembro.nombre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortadaEquipo;