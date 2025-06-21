import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('/peliculas.json')
      .then(res => res.json())
      .then(data => setPeliculas(data))
      .catch(err => console.error("Error al cargar las películas:", err));
  }, []);

  return (
    <div className="container py-4 animate__animated animate__slideInUp">
      <h2 className="text-center mb-4">🎬 Galería de Películas</h2>
      <div className="row g-4">
        {peliculas.map(peli => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={peli.id}>
            <div className="card h-100 shadow-sm border-0 animate__animated animate__fadeIn">
              <img src={peli.imagen} className="card-img-top" alt={peli.titulo} />
              <div className="card-body">
                <h5 className="card-title">{peli.titulo}</h5>
                <p className="card-text"><strong>Género:</strong> {peli.genero}</p>
                <p className="card-text"><strong>Año:</strong> {peli.año}</p>
                <p className="card-text"><strong>Director:</strong> {peli.director}</p>
                <p className="card-text">{peli.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peliculas;