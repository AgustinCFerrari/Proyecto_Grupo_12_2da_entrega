function Bitacora() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📅 Bitácora del Proyecto</h2>
      <ul>
        <li>✔️ [09/05/2025] Reunión inicial de planificación: definición de objetivos, stack tecnológico y distribución preliminar de tareas</li>
        <li>✔️ [10/05/2025] Inicio del proyecto: estructura base creada con Vite + React</li>
        <li>✔️ [11/05/2025] Asignación formal de roles:
          <ul>
            <li>Sergio Godoy – Coordinación general, documentación, control de avances</li>
            <li>Flavio Benítez – Sidebar, navegación, portada del equipo</li>
            <li>Agustín Ferrari – React Router, lógica y manejo de estados globales</li>
          </ul>
        </li>
        <li>✔️ [12/05/2025] Se integró React Router con rutas dinámicas para todas las secciones</li>
        <li>✔️ [13/05/2025] Se agregó el logo del grupo generado con IA al Sidebar</li>
        <li>✔️ [14/05/2025] Desarrollo de la sección Portada con mini tarjetas de presentación (nombre + imagen)</li>
        <li>✔️ [15/05/2025] Desarrollo de secciones individuales con habilidades, tecnologías, íconos y proyectos personales</li>
        <li>✔️ [18/05/2025] Creación de archivo `peliculas.json` con 20 películas e implementación del listado dinámico</li>
        <li>✔️ [20/05/2025] Integración de API pública del clima y diseño de componentes de visualización</li>
        <li>✔️ [22/05/2025] Mejora visual del Sidebar: íconos, hover y diseño responsive fijo para desktop</li>
        <li>✔️ [24/05/2025] Revisión UX/UI: contraste, espaciado, centrado de contenedores, organización en Flexbox</li>
        <li>✔️ [25/05/2025] Componentización final de tarjetas, cabeceras, y contenedores reutilizables</li>
        <li>✔️ [28/05/2025] Revisión cruzada entre integrantes, resolución de bugs y prueba de responsividad completa</li>
        <li>✔️ [29/05/2025] Publicación en GitHub con historial limpio de commits</li>
        <li>✔️ [29/05/2025] Deploy final del proyecto en Vercel funcionando correctamente</li>
        <li>✔️ [01/06/2025] Se agregó el logo del grupo generado con IA al Sidebar</li>
      </ul>

      <h3>🛠️ Organización y Metodología</h3>
      <p>
        Desde el comienzo se acordó usar una metodología ágil, organizando las tareas mediante reuniones por Discord y coordinación vía WhatsApp. 
        Cada integrante asumió responsabilidades claras pero con espíritu colaborativo, apoyando a los demás en pruebas cruzadas, debug y feedback de diseño. 
      </p>
      <p>
        El proyecto fue planificado para cumplir todos los requisitos técnicos: SPA con React Router, responsividad, integración de APIs,
        uso de datos JSON locales, y una interfaz amigable con componentes reutilizables. La publicación en GitHub y Vercel fue parte de los objetivos iniciales y se alcanzó con éxito.
      </p>
    </div>
  );
}

export default Bitacora;
