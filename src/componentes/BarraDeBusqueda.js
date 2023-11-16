
import React, { useState } from "react";
import '../estilo.css'

function BarraDeBusqueda ({ onSearch }) {
  const [palabraBuscada, setPalabraBuscada] = useState("");

  const handleSearch = () => {
    onSearch(palabraBuscada);
  };

  return (
    <div className="contendor-busquedas">
      <input
        className="barra-busqueda-l"
        type="text"
        placeholder="Buscar personajes..."
        value={palabraBuscada}
        onChange={(e) => setPalabraBuscada(e.target.value)}
      />
      <button className="boton-buscar"onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default BarraDeBusqueda;
