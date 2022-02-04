import '../styles/global.css';
import '../styles/pages/landing.css';
import background from '../img/background.png';
import ContainerMenu from '../components/menu/index';
import { CharacterCreation } from '../components/characterCreation/index';
import api from '../api/api';

import { useEffect, useState } from 'react';

const Landing = () => {
  const [criarPersonagem, setCriarPersonagem] = useState([]);
  const [selecionarPersonagem, setSelecionarPersonagem] = useState([]);

  //-------------------------
  //TODO pegar os json dao back (porta 3333)
  //-------------------------

  return (
    <div className="menu-user">
      <img className="background" src={background} alt="" />
      <ContainerMenu
        tabs={{
          pages: [
            {
              id: 1,
              title: 'Criar Personagem',
              body: (
                <CharacterCreation
                  db={{
                    kind: [{ name: 'teste', id: 'teste' }],
                    races: [{ name: 'teste', id: 'teste' }],
                  }}
                />
              ),
            },
            {
              id: 2,
              title: 'Selecionar Personagem',
              body: (
                <div>
                  <h1>Selecionar Personagem</h1>
                  <h2>outro teste Selecionar Personagem</h2>
                </div>
              ),
            },
            {
              id: 3,
              title: 'Visão geral',
              body: (
                <div>
                  <h1>Visão geral</h1>
                </div>
              ),
            },
          ],
        }}
      />
    </div>
  );
};

export default Landing;
