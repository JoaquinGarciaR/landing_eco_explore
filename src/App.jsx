// import { useState } from 'react'
import axios from 'axios';

// import reactLogo from './assets/react.svg'
import ecoExploreLogo from './assets/Logo.png'
// import viteLogo from '/vite.svg'
import './App.css'

import TourReservationForm from "./interactive_components/TourReservationForm/index.jsx";
import Copyright from "./interactive_components/Copyright/index.jsx";

function App() {
    // const [count, setCount] = useState(0)

    // reqs(payload)
    return (
        <>
            <div>
                <a href="#" target="_blank">
                    <img src={ecoExploreLogo} className="logo" alt="Vite logo"/>
                </a>
                {/*<a href="https://react.dev" target="_blank">*/}
                {/*  <img src={reactLogo} className="logo react" alt="React logo" />*/}
                {/*</a>*/}
            </div>
            <h1 className="h1 animacion">EcoExplore Caño Negro Costa Rica</h1>
            <TourReservationForm/>
            <p></p>
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
