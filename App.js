
import './App.css';
import Home from "./Home";
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';



function App() {
  return (
    <div className="App">
      
      <Home/>
        <p> Welcome to the Store</p>
        <Card style={{ width: '20rem' }}>
      <Card.Img /> <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title> <br/>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
        
     
    </div>
  );
}

export default App;
