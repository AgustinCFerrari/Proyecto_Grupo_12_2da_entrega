
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PortadaEquipo from './pages/PortadaEquipo';
import Flavio from './pages/Flavio';
import Agustin from './pages/Agustin';
import Sergio from './pages/Sergio';
import Peliculas from './pages/Peliculas';
import ProyectosPage from './pages/ProyectosPage';
import Clima from './pages/Clima';
import Bitacora from './pages/Bitacora';



function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '220px', padding: '2rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={<PortadaEquipo />} />
            <Route path="/flavio" element={<Flavio />} />
            <Route path="/agustin" element={<Agustin />} />
            <Route path="/sergio" element={<Sergio />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/proyectos" element={<ProyectosPage />} />
            <Route path="/clima" element={<Clima />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
