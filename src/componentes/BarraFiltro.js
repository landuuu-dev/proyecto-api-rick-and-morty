
import React from "react";
import '../estilo.css'

function BarraFiltro({ genero, tipo, estado }) {


  const handleGeneroChange = (e) => {
    const nuevoGenero = e.target.value;
    genero(nuevoGenero); // Llamando a la función genero que se pasó como prop
  };

  const handleTipoChange = (e) => {
    const nuevoTipo = e.target.value;
    tipo(nuevoTipo); // Llamando a la función tipo que se pasó como prop
  };

  const handleEstadoChange = (e) => {
    const nuevoEstado = e.target.value;
    estado(nuevoEstado); // Llamando a la función estado que se pasó como prop
  };

  return (
    <div className="barra-lateral">
    <div className="label-selector">
      <label className="label-class">Género:</label>
      <select onChange={handleGeneroChange} className="selector">
        <option value="all" className="opcion">Todos</option>
        <option value="female"className="opcion">Femenino</option>
        <option value="male"className="opcion">Masculino</option>
        <option value="genderless"className="opcion">Sin género</option>
        <option value="unknown"className="opcion">Desconocido</option>
      </select>
    </div>

    <div className="label-selector">
      <label className="label-class">Tipo:</label>
      <select onChange={handleTipoChange}className="selector">
        <option value="all"className="opcion">Todos</option>
        <option value="human"className="opcion">Humano</option>
        <option value="alien"className="opcion">Alien</option>
        {/* Agregar más opciones según tus necesidades */}
      </select>
    </div>

    <div className="label-selector">
      <label className="label-class">Estado:</label>
      <select onChange={handleEstadoChange} className="selector">
        <option value="all"className="opcion">Todos</option>
        <option value="alive" className="opcion">Vivo</option>
        <option value="dead"className="opcion">Muerto</option>
        <option value="unknown"className="opcion">Desconocido</option>
      </select>
      </div>
    </div>
  );
}

export default BarraFiltro;
