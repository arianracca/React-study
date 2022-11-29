import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import {HelloWorldApp} from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import './styles.css';

//Renderizado de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/>
        <FirstApp/> */}
        <CounterApp value={10} />
    </React.StrictMode>
)