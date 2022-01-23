import React, { useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/pages/landing.css";
import background from "../img/background.png";
import ContainerMenu from "../components/menu/container-menu";

const Landing = () => {
  return (
    <div className="menu-user">
      <img className="background" src={background} alt="" />
      <ContainerMenu
        tabs={{
          pages: [
            {
              id: 1,
              title: "Criar Personagem",
              body: (
                <div>
                  <h1>teste Criar Pesonagem</h1>
                  <h2>outro teste</h2>
                </div>
              ),
            },
            {
              id: 2,
              title: "Selecionar Personagem",
              body: (
                <div>
                  <h1>Selecionar Personagem</h1>
                  <h2>outro teste Selecionar Personagem</h2>
                </div>
              ),
            },
            {
              id: 3,
              title: "Sair",
              body: (
                <div>
                  <h1>Sair</h1>
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
