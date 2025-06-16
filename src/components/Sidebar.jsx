import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUsers,
  FaUser,
  FaCodeBranch,
  FaBook,
  FaCloudSun,
  FaFilm
} from 'react-icons/fa';
import '/src/styles/Sidebar.css';

const Sidebar = () => {
  const [equipoOpen, setEquipoOpen] = useState(false);

  const toggleEquipo = () => {
    setEquipoOpen(!equipoOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <img src="/images/Logo.jpg" alt="Logo Grupo Dev Frontend" />
      </div>
      <nav>
        <ul>
          <li onClick={toggleEquipo} className="equipo-toggle">
            <FaUsers /><Link to="/">Equipo</Link>
          </li>

          {equipoOpen && (
            <ul className="submenu">
              <li><FaUser /><Link to="/flavio">Flavio Benítez</Link></li>
              <li><FaUser /><Link to="/agustin">Agustín Ferrari</Link></li>
              <li><FaUser /><Link to="/sergio">Sergio Godoy</Link></li>
            </ul>
          )}

          <li><FaFilm /><Link to="/peliculas">Películas</Link></li>
          <li><FaCodeBranch /><Link to="/proyectos">Proyectos</Link></li>
          <li><FaCloudSun /><Link to="/clima">Clima</Link></li>
          <li><FaBook /><Link to="/bitacora">Bitácora</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
