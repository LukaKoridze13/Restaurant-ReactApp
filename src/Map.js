// import { useState } from 'react'
import { useLoadScript } from '@react-google-maps/api';
function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCFiILZ6aRr6-RS0Qt4y0T_QaSMtyY2ObY',

    })
    // let coords = JSON.parse(window.localStorage.getItem('location'))
    // const [lat, setLat] = useState(coords[1])
    // const [lng, setLng] = useState(coords[0])
    if (isLoaded) {
        return (
            <div>
                <h1> WILL BE ADDED SOON</h1>
            </div>
        )
    } else {
        return <div> Loading </div>
    }
}
export default Map