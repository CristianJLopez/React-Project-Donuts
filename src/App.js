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
      <div>
      <Router>
        <div>
        <Link to="./"><Button variant="danger" margin="50px">Home</Button></Link>
         <Link to="/contacto"><Button variant="danger">Contactanos</Button></Link> 
          <Link to="/quien-Soy"><Button  variant="danger">Quienes Somos</Button></Link> 
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tus postres favoritos en minutos
        </p>
        <hr/>
       </header>
      <div>
        <CardGroup>
        <Card style={{ width: '25.5rem' }} border="danger" bg="ligth">
          <Card.Img variant="top" src={logo} />
          <Card.Body> 
          <Card.Title>Donut de fresa</Card.Title>
          <Card.Text>
            Las mas deliciosas donuts con relleno natural de fresa
          </Card.Text>
        <Button variant="danger" onClick={encendido}>Agregar</Button>
        <h4>Donut fresa: {contar}</h4>
        <h5>Precio: {contar*3000}</h5>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '25.5rem' }} border="danger" bg="ligth">
          <Card.Img variant="top" src={Churroim} />
          <Card.Body> 
          <Card.Title>Churros de arequipe</Card.Title>
          <Card.Text>
            6 unidades de churritos azucarados con arequipe casero
          </Card.Text>
        <Button variant="danger" onClick={encendido1}>Agregar</Button>
        <h4>Churros arequipe: {contar1}</h4>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '25.5rem' }} border="danger" bg="ligth">
          <Card.Img variant="top" src={Churroim2} />
          <Card.Body> 
          <Card.Title>Cupcake chocofresa</Card.Title>
          <Card.Text>
            Cupcake de la abuela rellenito de chocolate y bañado en crema de fresa
          </Card.Text>
        <Button variant="danger" onClick={encendido2}>Quiero Una</Button>
        <h4>Cupcake chocofresa: {contar2}</h4>
      </Card.Body>
      </Card>
      
      <Card style={{ width: '25.5rem' }} border="danger" bg="ligth">
          <Card.Img variant="top" src={logo} />
          <Card.Body> 
          <Card.Title>Donut de chispitas</Card.Title>
          <Card.Text>
            Las mas deliciosas donuts con chispitas de dulce
          </Card.Text>
        <Button variant="danger" onClick={encendido3}>Quiero Una</Button><br/>
        <h4>Donut de chispitas: {contar3}</h4>
      </Card.Body>
      </Card>
      
      </CardGroup>
      <a
          className="App-link"
          href="https://wa.me/message/6ATWXQEFE4ILI1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Finalizar pedido
        </a>
      </div>
      
      
    </div>
  );
}

export default App;

