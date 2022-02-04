import React, { useEffect, useState } from "react";
import "../../styles/global.css";
import "../../styles/components/menu.css";

import api from "../../api/api";
import Header from "./header";
import Content from "./content";

function ContainerMenu({ tabs }) {
  const [toggleState, setToggleState] = useState(1);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    api.get("racas").then((response) => {
      setRaces(response.data);
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="menu">
      <Header
        tabs={{
          pages: tabs.pages,
          toggleState: toggleState,
          toggleTab: toggleTab,
        }}
      />
      <Content
        tabs={{
          races: races,

          toggleState: toggleState,
          toggleTab: toggleTab,

          pages: tabs.pages,
        }}
      />
    </div>
  );
}

export default ContainerMenu;
