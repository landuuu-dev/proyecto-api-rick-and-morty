import React from "react";
import '../estilo.css'

function ListaDePersonajes({ characters }) {
  return (
    <div className="result-container">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
          <img src={character.image} alt={character.name} className="imagen-personaje" />
          <p className="nombre-del-personaje">{character.name}</p>
        </div>
        ))}
    </div>
  );
}

export default ListaDePersonajes;
