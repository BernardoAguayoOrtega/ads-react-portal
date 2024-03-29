import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function  Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    // const passwordConfirmRef = useRef();
    const { login } = useAuth();
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
    
        
        try {
          setError("");
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);  
          history.push("/")
        } catch {
          setError("Oops! No se puede iniciar sesión");
        }
    
        setLoading(false);
      }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Inicia Sesión</h2>
                {/* { currentUser.email } */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type='submit'>
                        Iniciar
                    </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Olvide mi contraseña</Link>
                </div>    
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                ¿Necesitas una cuenta? <Link to="/signup">Crear cuenta</Link> 
            </div>
            <footer className="mt-5 text-center">
                <h2>Alternativa 19 del Sur</h2>
            </footer>
        </>
    )
}

