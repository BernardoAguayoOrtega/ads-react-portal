import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
    const [error, setError ] = useState(""); 
    const { currentUser }= useAuth();

    function handleLogout(){

    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Perfil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Correo Electronico:</strong> {currentUser.email}
                </Card.Body>               
            </Card>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Cerrar Sesión</Button>
                </div>
        </>
    )
}
