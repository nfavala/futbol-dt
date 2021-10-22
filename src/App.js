
import React from 'react';
import { Provider } from "react-redux";
import Equipo from './components/Equipo';
import Jugadores from './components/Jugadores';
import store from "./store";
import './styles/styles.scss';
import bandera from "../src/bandera_ARG.png";


const App = () => (
  <Provider store = {store}>
  <main>
   <img src={bandera} alt="" className="bandera__arg" />
    <h1 className="title">Futbol DT</h1>
    <Jugadores />
    <Equipo />
  </main>
  </Provider>
)


export default App;
