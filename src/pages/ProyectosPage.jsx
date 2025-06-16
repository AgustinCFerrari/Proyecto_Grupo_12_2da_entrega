import { useState, useEffect } from "react";
import "animate.css";
import "../styles/ProyectosPage.css";

function ProyectosPage() {
  const [proyectos, setProyectos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/proyectos.json")
      .then(res => res.json())
      .then(data => setProyectos(data))
      .catch(err => console.error(err));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? proyectos.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === proyectos.length - 1 ? 0 : prev + 1
    );
  };

  const getIndices = () => {
    const prev2 = (currentIndex - 2 + proyectos.length) % proyectos.length;
    const prev1 = (currentIndex - 1 + proyectos.length) % proyectos.length;
    const next1 = (currentIndex + 1) % proyectos.length;
    const next2 = (currentIndex + 2) % proyectos.length;
    return [prev2, prev1, currentIndex, next1, next2];
  };

  const visibleIndices = proyectos.length > 0 ? getIndices() : [];

  return (
    <div className="carrusel-container">
      <h2>🧩 Proyectos del Equipo</h2>

      <div className="carrusel">
        {visibleIndices.map((index) => (
          <div
            key={index}
            className={
              "slide animate__animated animate__fadeIn animate__slow " +
              (index === currentIndex ? "active" : "side")
            }
          >
            <h3>{proyectos[index].titulo}</h3>
            <p>{proyectos[index].descripcion}</p>
            <strong>Tecnologías:</strong>
            <ul>
              {proyectos[index].tecnologias.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="controls">
        <button
          className="btn btn-outline-primary mx-2"
          onClick={prevSlide}
        >
          ⟵ Anterior
        </button>
        <button className="btn btn-primary" onClick={nextSlide}>
          Siguiente ⟶
        </button>
      </div>

      <div className="dots">
        {proyectos.map((_, index) => (
          <span
            key={index}
            className={
              "dot " + (index === currentIndex ? "active" : "")
            }
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ProyectosPage;
