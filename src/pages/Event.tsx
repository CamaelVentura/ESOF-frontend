import React from 'react';
import {Link} from 'react-router-dom';

import {FiPlus} from 'react-icons/fi';

import '../styles/pages/event.css';

function Evento(){
  return(
    <div id="event">
      <aside>
        <header>
          <img src="" alt="Logo-pequeno"/>
          <h2>Crie um evento</h2>
          <p>Você ainda não tem evento criado.</p>
        </header>

        <footer>

        </footer>
      </aside>

      <div></div>

      <Link to='/' className="create-event">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default Evento;