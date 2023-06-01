import React from 'react';
import './Nav.css'; // Aquí puedes importar el archivo CSS con los estilos del componente

// Este es un componente funcional que renderiza una barra de navegación
function Nav() {
  // Aquí puedes definir el estado y los efectos del componente
  // Por ejemplo, puedes usar useState para guardar el ítem seleccionado del menú
  const [selected, setSelected] = React.useState('inicio');

  // Esta es la función que se ejecuta al hacer clic en un ítem del menú
  function handleClick(event) {
    // Aquí puedes cambiar el estado o hacer otras acciones
    // Por ejemplo, puedes usar event.target para obtener el ítem clicado y actualizar el estado
    setSelected(event.target.id);
  }

  // Este es el JSX que se devuelve al renderizar el componente
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="#inicio" id="inicio" onClick={handleClick} className={selected === 'inicio' ? 'active' : ''}>Inicio</a>
        </li>
        <li>
          <a href="#trabajos" id="trabajos" onClick={handleClick} className={selected === 'trabajos' ? 'active' : ''}>Trabajos realizados</a>
        </li>
        <li>
          <a href="#contacto" id="contacto" onClick={handleClick} className={selected === 'contacto' ? 'active' : ''}>Contacto</a>
        </li>
        <li>
          <a href="#presupuesto" id="presupuesto" onClick={handleClick} className={selected === 'presupuesto' ? 'active' : ''}>Presupuesto</a>
        </li>
      </ul>
    </nav>
  );
}

// Este es el export que permite importar el componente desde otros archivos
export default Nav;
