import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import {HelloWorldApp} from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import { CounterApp2 } from './CounterApp2';
import './styles.css';

//Renderizado de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/>
        <FirstApp/> */}
        <CounterApp2 value={0} />
    </React.StrictMode>
)