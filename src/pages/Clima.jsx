import { useEffect, useState } from 'react';
import "/src/styles/Clima.css"; 

const Clima = () => {
  const [datosClima, setDatosClima] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = 'f576f03945c56553cfffd6246ae3d29d';

  const capitales = [
    "Buenos Aires", "La Plata", "Córdoba", "Santa Fe",
    "San Miguel de Tucumán", "Salta", "San Salvador de Jujuy",
    "Resistencia", "Corrientes", "Posadas", "Paraná",
    "Formosa", "Santiago del Estero", "San Fernando del Valle de Catamarca",
    "La Rioja", "San Juan", "Mendoza", "Neuquén",
    "Viedma", "Rawson", "Río Gallegos", "Ushuaia"
  ];

  useEffect(() => {
    const obtenerClimaCapitales = async () => {
      try {
        const peticiones = capitales.map(ciudad =>
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},AR&appid=${API_KEY}&units=metric&lang=es`)
            .then(res => res.json())
        );
        const resultados = await Promise.all(peticiones);
        setDatosClima(resultados);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("No se pudo obtener el clima de algunas ciudades");
      }
    };

    obtenerClimaCapitales();
  }, []);

  return (
    <div className="clima-container">
      <h2>Clima Actual en Argentina</h2>
      {error && <p className="clima-error">{error}</p>}
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Capitales de Provincia</th>
            <th>Temperatura (°C)</th>
            <th>Condición</th>
          </tr>
        </thead>
        <tbody>
          {datosClima.map((clima, i) => (
            <tr key={i}>
              <td>{clima.name}</td>
              <td>{clima.main?.temp ?? "N/A"}</td>
              <td>{clima.weather?.[0]?.description ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clima;
