import React from 'react';
import './Header.css'; // Vamos criar esse arquivo CSS logo depois

function Header() {
  return (
    <header className="header">
      <h1>Olá, sou a Eduarda Veloso</h1>
      <h3>Uma dev front end e com o pezinho em desenvolvimento back também. Ah, e uma apaixonada por experiência do usuário</h3>
      <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
