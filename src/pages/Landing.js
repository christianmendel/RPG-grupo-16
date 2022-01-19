import React from 'react';
import '../styles/global.css';
import '../styles/pages/landing.css';
import background from '../img/background.jpg';

function Landing() {
    return (
        <body>

        <header class="header">
        </header>

        <section class="banner">
            <img class="background" src={background} alt=""/>
            <div>
                <h1>resto do conteudo</h1>
            </div>
        </section> 

        <footer class="footer"> 
        </footer>

        </body>
    );
}

export default Landing;