import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';

function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src="" alt="Imagem do logo"/>
        <main>
          <h1>Tudo fica melhor entre amigos</h1>
          <p>Divida tudo e não se preocupe.</p>
        </main>

        <div className="user">
          <span>Bem vindo,</span>
          <strong>Camael Ventura</strong>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;