import React, { useState, useEffect } from "react";
import logo from './assets/img/donut.png';
import Churroim from './assets/img/logo1.png';
import Churroim2 from './assets/img/cup.png';
import { Card, Button, CardGroup } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";
import './styles/App.css';



function App() {

  
  const [contar, setContar] = useState(0)
  
  useEffect(() => {
    console.log("total: "+contar)
  }, [contar])
  
  const encendido = () => {
    setContar(contar+1);
  }

  const [contar1, setContar1] = useState(0)
  
  useEffect(() => {
    console.log("total-1: "+contar1)
  }, [contar1])
  
  const encendido1 = () => {
    setContar1(contar1+1);
  }
  

  const [contar2, setContar2] = useState(0)
  
  useEffect(() => {
    console.log("total-2: "+contar2)
  }, [contar2])
  
  const encendido2= () => {
    setContar2(contar2+1);
  }

  const [contar3, setContar3] = useState(0)
  
  useEffect(() => {
    console.log("total-3: "+contar3)
  }, [contar3])
  
  const encendido3 = () => {
    setContar3(contar3+1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Los mejores donuts de usme han llegado!
        </p>
       </header>
      <div>
        <CardGroup>
        <Card style={{ width: '25.5rem' }} border="primary" bg="info">
          <Card.Img variant="top" src={logo} />
          <Card.Body> 
          <Card.Title>Simpson Donut</Card.Title>
          <Card.Text>
            Las mas deliciosas donas acompanadas de tu Topping Favorito.
          </Card.Text>
        <Button variant="success" onClick={encendido}>Quiero Una</Button>
        <h4>Clicks:{contar}</h4>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '25.5rem' }} border="primary" bg="info">
          <Card.Img variant="top" src={Churroim} />
          <Card.Body> 
          <Card.Title>Simpson Donut</Card.Title>
          <Card.Text>
            Las mas deliciosas donas acompanadas de tu Topping Favorito.
          </Card.Text>
        <Button variant="success" onClick={encendido1}>Quiero Una</Button>
        <h4>Clicks:{contar1}</h4>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '25.5rem' }} border="primary" bg="info">
          <Card.Img variant="top" src={Churroim2} />
          <Card.Body> 
          <Card.Title>Simpson Donut</Card.Title>
          <Card.Text>
            Las mas deliciosas donas acompanadas de tu Topping Favorito.
          </Card.Text>
        <Button variant="success" onClick={encendido2}>Quiero Una</Button>
        <h4>Clicks:{contar2}</h4>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '25.5rem' }} border="primary" bg="info">
          <Card.Img variant="top" src={logo} />
          <Card.Body> 
          <Card.Title>Simpson Donut</Card.Title>
          <Card.Text>
            Las mas deliciosas donas acompanadas de tu Topping Favorito.
          </Card.Text>
        <Button variant="success" onClick={encendido3}>Quiero Una</Button>
        <h4>Clicks:{contar3}</h4>
      </Card.Body>
      </Card>
      
      </CardGroup>
      <a
          className="App-link"
          href="https://wa.me/message/6ATWXQEFE4ILI1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hacer pedido
        </a>
      </div>
      
      <div>
      <Router>
        <div>
        <Link to="./"><Button>Home</Button></Link>
         <Link to="/contacto"><Button>Contacto</Button></Link> 
          <Link to="/quien-Soy"><Button>Quien Soy</Button></Link> 
        </div>

      <Switch>
        <Route path='/contacto'>
          <Contacto/>
        </Route>
        <Route path='/quien-Soy'>
          <QuienSoy/>
        </Route>
      </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;

