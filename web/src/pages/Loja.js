import React from "react";
import "../styles/global.css";
import "../styles/pages/loja.css";
import background from "../img/background.png";
import ContainerMenu from "../components/menu/index";

function Loja() {
  return (
    <div className="menu-user">
      <img className="background" src={background} alt="" />
      <ContainerMenu
        tabs={{
          pages: [
            {
              id: 1,
              title: "Comprar Item",
              body: (
                <div>
                  <h1>Comprar Item</h1>
                </div>
              ),
            },
            {
              id: 2,
              title: "Vender Item",
              body: (
                <div>
                  <h1>Vender Item</h1>
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

export default Loja;
