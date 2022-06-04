import React, { useContext } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Context } from './Context';

const containerStyle = {
    width: '400px',
    height: '400px'
};



function Map() {
    let global = useContext(Context)
    let coords=JSON.parse(window.localStorage.getItem('location'))
    const center = {
        lat: coords[1],
        lng: coords[0]
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCFiILZ6aRr6-RS0Qt4y0T_QaSMtyY2ObY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
        new window.google.maps.Marker({
            position: center,
            map,
            title: "Your Home",
        });
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)