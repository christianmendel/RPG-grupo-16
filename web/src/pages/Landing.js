import React, {useEffect, useState} from 'react';
import '../styles/global.css';
import '../styles/pages/landing.css';
import background from '../img/background.png';
import api from '../api/api'

function Landing() {

    const [toggleState, setToggleState] = useState(1);
    const [races, setRaces] = useState([]);

    useEffect(() => {
        api.get('racas').then(response=>{
            setRaces(response.data)
        })  

        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])  

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
                            Criar personagem
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            Selecionar personagem
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            Excluir personagem
                        </button>
                    </div>
                </div>

                <div className="container container-tab">
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? "content  active-content" : "content"} >
                                <h2>Criação de personagem</h2>
                                <label htmlFor="">Nome: </label>
                                <input type="text"/>
                                <label htmlFor="">Raça: </label>
                                <select name="" id="">
                                    {races?.map(item => <option key={item.id}> {item.breed} </option>)}
                                </select>
                                <label htmlFor="">Classe: </label>
                                <select name="" id="">
                                    {races?.map(item => <option key={item.id}> {item.breed} </option>)}
                                </select>
                                {/* <button onClick={testeDados}>BotaoDosDados</button> */}
                        </div>
                        <div className={toggleState === 2 ? "content  active-content" : "content"}>
                            <h2>Personagens</h2>
                            <h3>Anão</h3>
                            <h3>Assassino</h3>
                        </div>

                        <div className={toggleState === 3 ? "content  active-content" : "content"}>
                            <h2>Personagens</h2>
                            <p>racas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;