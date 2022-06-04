import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css'
import Image1 from './Images/image1.jpg'
import Image2 from './Images/image2.jpg'
import Image3 from './Images/image3.jpg'
import Right from './Images/right-arrow.png'
import Left from './Images/left-arrow.png'
import { useEffect, useState,useContext } from 'react'
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Login.css'
let index =0;
export default function Slider() {
    let global = useContext(Context)
    let navigate = useNavigate()
    const [images, setImages] = useState([Image1, Image2, Image3])
    const [currentImage, setCurrentImage] = useState(images[index])
    function next() {
        if (index === 2) {
            index = 0;
            setCurrentImage(images[index])
        } else {
            index += 1
            setCurrentImage(images[index])
        }
    }
    function back() {
        if (index === 0) {
            index = 2;
            setCurrentImage(images[index])
        } else {
            index -= 1
            setCurrentImage(images[index])
        }
    }
    function arrow() {
        if (window.screen.width <= 780) {
            return (<img className='right' onClick={next} src={Right} alt="Arrow Right" />)
        }
    }
    function arrowTwo() {
        if (window.screen.width > 780) {
            return (<img className='right' onClick={next} src={Right} alt="Arrow Right" />)
        }
    }
    useEffect(() => {
        setInterval(next, 5000)
        return (() => {
            if (index === 0) {

            }
        })
    }, [])
    return (

            <div className='section' style={{position: 'relative'}}>
                <img className='left' onClick={back} src={Left} alt="Arrow Left" />
                {arrow()}
                <img className='slider' src={currentImage} alt="Restaurant" />
                {arrowTwo()}
            <div className='promo'>Register and get 15% discount on your first order <p onClick={() => {
                if (global[18] === "Login") { navigate('/Restaurant-ReactApp/register') } else {
                    Swal.fire(
                        'Oops!',
                        'Log out first to register',
                        'error'
                    )
                }
            }} style={{ padding: '1vw 2vw 1vw 2vw', backgroundColor: "rgb(203, 80, 35)", borderRadius: '30px', fontWeight: 'bold', marginLeft: '10px', cursor: 'pointer',fontSize:'3vw'}}>Register</p></div>
            </div>
    )
}
