
import axios from "axios";
import BarraDeBusqueda from "./componentes/BarraDeBusqueda";
import ListaDePersonajes from "./componentes/ListaDePersonajes";
import './estilo.css'; 
import { useState, useEffect } from 'react';
import BarraFiltro from './componentes/BarraFiltro';



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generoFiltro, setGeneroFiltro] = useState('all');
  const [tipoFiltro, setTipoFiltro] = useState('all');
  const [estadoFiltro, setEstadoFiltro] = useState('all');

  //filtros de la BarraFiltro

  const handleGenero = (nuevoGenero) => {
    setGeneroFiltro(nuevoGenero);
  };
  
  const handleTipo = (nuevoTipo) => {
    setTipoFiltro(nuevoTipo);
  };
  
  const handleEstado = (nuevoEstado) => {
    setEstadoFiltro(nuevoEstado);
  };

  
  // Filtro del la BarraBusqueda

  const searchCharacters = async (palabraBuscada) => {
    setIsLoading(true);

    try {
      let url = `https://rickandmortyapi.com/api/character/?name=${palabraBuscada}`;
      if (generoFiltro !== 'all') {
        url += `&gender=${generoFiltro}`;
      }
      if (tipoFiltro !== 'all') {
        url += `&type=${tipoFiltro}`;
      }
      if (estadoFiltro !== 'all') {
        url += `&status=${estadoFiltro}`;
      }
  
      const response = await axios.get(url);

      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error al buscar personajes:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchCharacters(''); 
  }, [searchCharacters]); 




  return (
    <div className="contenedor">
      <h1 className='titulo-buscador'>Buscador de personajes de Rick y Morty</h1>
      <div className="filtros-y-barra">
      <BarraDeBusqueda className="barra-busqueda-l" onSearch={searchCharacters} />
      <BarraFiltro className="barra-filtro" genero={handleGenero} tipo={handleTipo} estado={handleEstado} />
      </div>
      {isLoading ? (
        <p className='cargando'>Cargando...</p>
      ) : (
        <ListaDePersonajes characters={searchResults} />
        

      )}
      
    </div>

    
  );


      }

export default App;
