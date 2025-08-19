import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from  './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
   //<Home/>
  <div>
    <Navbar/>
    <Jumbotron/>
    <div className='container'>
      <div className='row'>       
         <Card imagen={"https://flipdish.imgix.net/iJrReR1nHAVsa4qccSSo1ndz8P8.jpg?w=200&h=183&auto=format&upscale=true&dpr=2&q=45"} titulo={"MENÚ CON TODO "} descripcion={"2 Perros con todo + 1 acompañante + 1 bebida"}/>
         <Card imagen={"https://flipdish.imgix.net/nhfVhjUADnMQSDqmA6kUy2Fsu0.jpg?w=200&h=183&auto=format&upscale=true&dpr=2&q=45"} titulo={"MENÚ GALIPÁN "} descripcion={"2 Perros Galipán + 1 acompañante + 1 bebida"}/>
         <Card imagen={"https://flipdish.imgix.net/SliM45waiv8FDNvvyUJnK8HRckE.jpg?w=200&h=183&auto=format&upscale=true&dpr=2&q=45"} titulo={"MENÚ MARIACHI "} descripcion={"2 Perros Mariachi + 1 acompañante + 1 bebida"}/>
         <Card imagen={"https://flipdish.imgix.net/ikib8LmIVQuOvmkTqZDPbBFpnM.jpg?w=200&h=183&auto=format&upscale=true&dpr=2&q=45"} titulo={"MENÚ MARIACHI "} descripcion={"2 Perros Yankee + 1 acompañante + 1 bebida"}/>
        </div>
    </div>
  </div>

  //</React.StrictMode>,
)
