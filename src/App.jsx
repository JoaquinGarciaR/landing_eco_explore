// import { useState } from 'react'
import axios from 'axios';

// import reactLogo from './assets/react.svg'
import ecoExploreLogo from './assets/Logo.png'

import './App.css'

import TourReservationForm from "./interactive_components/TourReservationForm/index.jsx";
import Copyright from "./interactive_components/Copyright/index.jsx";
import {Typography} from "@mui/material";
import ContactUs from "./interactive_components/ContactUs/index.jsx";


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
    const inicio = document.getElementById('inicio');
    const titlesBlog = document.getElementById('titles-blog');
    const blogContent = document.getElementById('blog-content');
    const root = document.getElementById('root');

    toggleButton.addEventListener('click', function() {
        inicio.classList.toggle('active');
        toggleButton.classList.toggle('active');
        blogContent.style.display = (blogContent.style.display === 'none') ? 'block' : 'none';
        titlesBlog.style.display = (titlesBlog.style.display === 'none') ? 'flex' : 'none';
        root.style.display = (root.style.display === 'none') ? 'block' : 'none';

    });
    inicio.addEventListener('click', function() {
        inicio.classList.toggle('active');
        toggleButton.classList.toggle('active');
        blogContent.style.display = (blogContent.style.display === 'none') ? 'block' : 'none';
        titlesBlog.style.display = (titlesBlog.style.display === 'none') ? 'flex' : 'none';
        root.style.display = (root.style.display === 'none') ? 'block' : 'none';
    });
});

function App() {
    // const [count, setCount] = useState(0)

    // reqs(payload)
    return (
        <>
            <div>
                <a href="#" target="_blank">
                    <img src={ecoExploreLogo} className="logo" alt="Eco Explore Caño Negro Costa Rica"/>
                </a>
                {/*<a href="https://react.dev" target="_blank">*/}
                {/*  <img src={reactLogo} className="logo react" alt="React logo" />*/}
                {/*</a>*/}
            </div>
            <h1 className="h1 animacion"><strong> EcoExplore Caño Negro Costa Rica</strong></h1>
            <Typography className="h1 animacion" variant="h2" align="center" gutterBottom><strong> Caño Negro </strong></Typography>
            <TourReservationForm/>
            <ContactUs/>
            {/*<Typography className="h1 animacion" variant="h2" align="center">Contactos</Typography>*/}
            <Copyright/>
            {/*<div className="card">*/}
            {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*    count is {count}*/}
            {/*  </button>*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*  Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
        </>
    )
}

export default App
