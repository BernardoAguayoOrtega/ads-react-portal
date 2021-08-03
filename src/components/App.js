import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup';


function App() {
  return (
      <Container className="d-flex align-items-center
                            justify-content-center"
                            style={{ minHeight:"100vh" }}
      >
        <div className="w-100" styles={{ maxWidth: '400px' }}>
            <Signup/>
        </div>
      </Container>
  ) 
}

export default App;
