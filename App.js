import React from 'react';

import './App.css';

import {Button,Alert,Card,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

<Form>
  <Form.Group controlId="formEmail">
    <Form.Label>Email Address</Form.Label>
  <Form.Control type="email" placeholder="Example@gmail.com"/>
  <Form.Text className="text-muted">
    We'll never share you email address,trust us!
  </Form.Text>
</Form.Group>


<Form.Group controlId="formPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password"/>
</Form.Group>
  <Button variant="secondary" type="submit">Login</Button>
</Form>


        <Card style={{color:"#000", marginBottom:15}}>
          <Card.Body>
            <Card.Title>Card example</Card.Title>
            <Card.Text>
              this is an example of bootstrap tutorial.
            </Card.Text>
          </Card.Body>
        </Card>
        
       <Alert variant='success'>This is a button</Alert>
        <Button>Test Button</Button>
       
        
      </header>
    </div>
  );
}

export default App;
