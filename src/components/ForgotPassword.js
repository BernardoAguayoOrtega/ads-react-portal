import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function  ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [ error, setError ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);
    

    async function handleSubmit(e) {
        e.preventDefault();
    
        
        try {
            setMessage('');
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value)
            setMessage('Revisa tu correo electrónico para instrucciones');
        } catch {
          setError("Oops! No se puede generar nueva contraseña");
        }
    
        setLoading(false);
      }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Reset Contraseña</h2>
                {/* { currentUser.email } */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type='submit'>
                        Generar Nueva Contraseña
                    </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login">Iniciar Sesión</Link>
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

