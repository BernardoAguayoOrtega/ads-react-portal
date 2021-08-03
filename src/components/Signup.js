import React, { useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';


export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const { error, setError } = useState('')
    const { loading, setLoading } = useState(false)

    async function handleSubmit(e){
        e.preventDefaul()

        if(passwordRef.current.value === passwordConfirmRef.current.value){
            return setError('Password no match')
        }

        
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }catch{
            setError('failed to create')
        }
        setLoading(false)
        
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password-Confirm</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button className="w-100" type='submint'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? login
            </div>
        </>
    )
}

