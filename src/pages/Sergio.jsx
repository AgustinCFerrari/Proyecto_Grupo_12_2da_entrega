import React from "react";
import "/src/styles/Perfil.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";

const Sergio = () => {
  return (
    <div className="perfil-container">
      <h2>Sergio Godoy</h2>
      <img src="./images/sergio.jpg" alt="Foto de Sergio" className="perfil-imagen" />
      <h3>Habilidades en programación:</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
      </ul>
      <h3>Proyectos:</h3>
      <ul>
        <li>Panel de Control para Admin</li>
        <li>Red Social básica con MongoDB</li>
        <li>Simulador de Finanzas Personales</li>
      </ul>
      <h3>Tecnologías:</h3>
      <div className="tech-icons">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaNodeJs />
        <FaGit />
      </div>

      <h3>Redes Sociales:</h3>
      <div className="social-icon">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Sergio;
