import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from './Context'
import Swal from 'sweetalert2'
import './Login.css'
export default function Login() {
    let global = useContext(Context)
    let navigate=useNavigate()
    let z;
    let w;
    if (global[18] === "Login"){
        z='block'
        w='170px'
    }else{
        z='none'
        w='86px'
    }
    return (
        <div style={{ height:'50px', width:w,padding: '10px', backgroundColor: '#d78922', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '30px',textDecoration: 'none'}}>
            <p onClick={global[19]} style={{ padding: '5px 10px 5px 10px', backgroundColor: "#c5CBE3", borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>{global[18]}</p>
            <p onClick={() => {
                if (global[18] === "Login") { navigate('/Restaurant-ReactApp/register') } else {
                    Swal.fire(
                        'Oops!',
                        'Log out first to register',
                        'error'
                    )}}}style={{ padding: '5px 10px 5px 10px', backgroundColor: "#c5CBE3", borderRadius: '30px', fontWeight: 'bold', marginLeft:'10px',cursor: 'pointer', display: z }}>Register</p>
        </div>
    )
}
