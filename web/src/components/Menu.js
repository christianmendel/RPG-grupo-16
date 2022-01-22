import React, {useState} from 'react';
import '../styles/global.css';
import '../styles/components/menu.css';
import background from '../img/background.png';

function Menu() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="menu-user">
            <img className="background" src={background} alt=""/>
            <div className="menu">
                <div className="container container-menu">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                        </button>
                    </div>
                </div>

                <div className="container container-tab">
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? "content  active-content" : "content"} >
                                
                        </div>
                        <div className={toggleState === 2 ? "content  active-content" : "content"}>
                            
                        </div>

                        <div className={toggleState === 3 ? "content  active-content" : "content"}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;