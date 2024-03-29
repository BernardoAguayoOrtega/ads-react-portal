import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function  Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("La contraseña no coincide");
        }
    
        try {
          setError("");
          setLoading(true);
          await signup(emailRef.current.value, passwordRef.current.value);  
        } catch {
          setError("Oops! Necesitas tener una cuenta");
        }
    
        setLoading(false);
      }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Crear Cuenta</h2>
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
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirma Contraseña</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-1" type='submit'>
                        Crear cuenta
                    </Button>
                </Form>
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link> 
            </div>
        </>
    )
}

