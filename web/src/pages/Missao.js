import React from "react";
import "../styles/global.css";
import "../styles/pages/missao.css";
import ContainerMenu from "../components/menu/index";
import background from "../img/background.png";

function Missao() {
  return (
    <div className="menu-user">
      <img className="background" src={background} alt="" />
      <ContainerMenu
        tabs={{
          pages: [
            {
              id: 1,
              title: "Realizar Missao",
              body: (
                <div>
                  <h1>Realizar Missao</h1>
                </div>
              ),
            },
            {
              id: 2,
              title: "Vender Item",
              body: (
                <div>
                  <h1>Ver missões</h1>
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
}

export default Missao;
