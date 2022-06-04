import React, { useContext, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import './LoginPage.css'
import { Context } from './Context'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function LoginPage() {
    let global = useContext(Context)
    let navigate = useNavigate()
    let ref = useRef()
    function checkAccount() {
        let data = JSON.parse(window.localStorage.getItem('users'))
        if (data === null) {
            Swal.fire(
                `Oops!`,
                'Email or password incorrect',
                'error'
            )
        } else {
            data.map((item, index) => {
                if (item[2] === ref.current[0].value && item[4] === ref.current[1].value) {
                    global[20]()
                    global[21](item)
                    window.localStorage.setItem('currentUser', JSON.stringify(item))
                    Swal.fire(
                        `Hello ${item[0]}!`,
                        'You are logged in successfully',
                        'success'
                    )
                    navigate('/Restaurant-ReactApp/')

                } else if (index === data.length - 1 && item[2] === ref.current[0].value && item[4] === ref.current[1].value) {
                    Swal.fire(
                        `Oops!`,
                        'Email or password incorrect',
                        'error'
                    )
                }
            })
        }
    }
    return (
        <div style={{ maxWidth: '1920px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', }}>
            <Form className='form' ref={ref} onSubmit={(e) => { e.preventDefault(); }}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={checkAccount}>
                    Login
                </Button>
            </Form>
        </div>

    )
}
