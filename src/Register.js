import React, { useContext, useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function Register() {
    const [link, setLink] = useState(null)
    let ref = useRef()
    let navigate = useNavigate()
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setLink(base64)
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    function register() {
        if (ref.current[0].value.length < 2) {
            Swal.fire(
                'Oops!',
                'Name should have at least 3 characters',
                'error'
            )
            return
        }
        ref.current[0].value = ref.current[0].value.charAt(0).toUpperCase() + ref.current[0].value.slice(1);
        if (ref.current[1].value.length < 3) {
            Swal.fire(
                'Oops!',
                'Surname should have at least 3 characters',
                'error'
            )
            return
        }
        ref.current[1].value = ref.current[1].value.charAt(0).toUpperCase() + ref.current[1].value.slice(1);
        if (ref.current[2].value.indexOf("@") === -1) {
            Swal.fire(
                'Oops!',
                'Enter a valid email address',
                'error'
            )
            return
        }
        if (JSON.parse(window.localStorage.getItem('users')) !== null) {
            let stop = false;
            JSON.parse(window.localStorage.getItem('users')).map((item) => {
                if (ref.current[2].value === item[2]) {
                    stop = true
                    Swal.fire(
                        'Oops!',
                        'Email address already in use',
                        'error'
                    )
                }
            })
            if (stop === true) {
                return
            }
        }
        if (ref.current[4].value.length < 5) {
            Swal.fire(
                'Oops!',
                'Passwords must contain at least 5 characters',
                'error'
            )
            return
        }
        if (ref.current[4].value !== ref.current[5].value) {
            Swal.fire(
                'Oops!',
                'Passwords do not match',
                'error'
            )
            return
        }
        let l = JSON.parse(window.localStorage.getItem('users'))
        if (l === null) {
            l = []
        }
        l.push([])
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        for (let i = 0; i < 7; i++) {
            let x = l.length - 1
            if (i === 3) {

                l[x].push(link)
            }else if(i===6){

            l[x].push(text)
            } else {
                l[x].push(ref.current[i].value)
            }
        }

        window.localStorage.setItem('users', JSON.stringify(l))
        for (let i = 0; i < 6; i++) {
            ref.current[i].value = ''
        }
        Swal.fire(
            'Success!',
            `Your account has been registered. Promocode: ${text}`,
            'success'
        )
        navigate('/Restaurant-ReactApp/login')
    }
    return (
        <div style={{ maxWidth: '1920px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', }}>
            <Form className='form' ref={ref} onSubmit={(e) => { e.preventDefault(); }}>
                <Form.Group className="mb-3" >
                    <Form.Label className='mt-2'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    <Form.Label className='mt-2'>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" />
                    <Form.Label className='mt-2'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Label className='mt-2'>Profile Picture</Form.Label>
                    <Form.Control type="file" onChange={(e) => { uploadImage(e) }} />
                </Form.Group>

                <Form.Group className="mb-3 mt-2" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Label className=" mt-2" >Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={register}>
                    Register
                </Button>
            </Form>
        </div>
    )
}
