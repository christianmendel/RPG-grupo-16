import React from "react";
import "../styles/global.css";
import "../styles/pages/pvp.css";
import ContainerMenu from "../components/menu/container-menu";
import background from "../img/background.png";

function Pvp() {
  return (
    <div className="menu-user">
      <img className="background" src={background} alt="" />
      <ContainerMenu
        tabs={{
          pages: [
            {
              id: 1,
              title: "Batalhar",
              body: (
                <div>
                  <h1>Batalhar</h1>
                </div>
              ),
            },
            {
              id: 2,
              title: "Inventario",
              body: (
                <div>
                  <h1>Inventario</h1>
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

export default Pvp;
