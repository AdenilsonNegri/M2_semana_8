import React from 'react';
import './Orcamento.css';

const Orcamento = () => {
  return (
    <div className="orcamento-container">
      <h2>Solicite seu Orçamento</h2>
      <form className="orcamento-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Descreva seu projeto (área, localização...)" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Orcamento;
