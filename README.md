
# Proyecto React Grupo 12

Este proyecto fue creado utilizando **React + Vite**, y cumple con todos los requisitos del trabajo práctico final de Front End.

## 🛠️ Tecnologías utilizadas

- React
- Vite
- React Router DOM
- CSS Modules
- API externa (clima)
- JSON local (películas)
- Deploy: Vercel

---

## 🔧 Requisitos previos

Asegúrate de tener instalado lo siguiente:

- Node.js (recomendado: v18 o superior)
- npm

---

## 🚀 Instalación del proyecto

1. **Cloná el repositorio:**

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
```

2. **Instalá Vite (opcional si usás `npm create vite@latest`):**

```bash
npm create vite@latest nombre-proyecto
```

3. **Instalá las dependencias del proyecto:**

```bash
npm install
```

4. **Instalá React Router DOM:**

```bash
npm install react-router-dom
```

5. **Levantá el servidor de desarrollo:**

```bash
npm run dev
```

---

## 🌐 Acceso

- **URL del proyecto en producción:** [https://grupo12-react.vercel.app](https://grupo12-react.vercel.app)
- **Repositorio GitHub:** [https://github.com/tu_usuario/tu_repositorio](https://github.com/tu_usuario/tu_repositorio)

---

## 🧠 Estructura del Proyecto

- `/src/pages`: Cada sección del sitio (presentación, integrantes, bitácora, películas, clima).
- `/src/components`: Componentes reutilizables (Sidebar, tarjetas, menús).
- `/public`: Archivos estáticos.
- `/src/assets`: Imágenes, íconos, logos.

---

## 📦 Build de producción

Para generar el proyecto listo para deploy:

```bash
npm run build
```

Luego, podés subir la carpeta `dist` a cualquier hosting estático (ej: Vercel, Netlify).

---

## 📌 Notas

- El sidebar está fijo en escritorio y adaptable en móviles.
- El archivo JSON se encuentra en `/src/data/peliculas.json`.
- El consumo de la API de clima se encuentra en `Clima.jsx`.
- Las rutas están gestionadas con React Router.

