import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
    const [error, setError ] = useState(""); 
    const { currentUser, logout }= useAuth();
    const history = useHistory();

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Problemas al cerrar sesión')
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Perfil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Correo Electronico:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Actualizar Perfil</Link>
                </Card.Body>               
            </Card>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Cerrar Sesión</Button>
                </div>
                <p>HEY THERE</p>
        </>
    )
}
