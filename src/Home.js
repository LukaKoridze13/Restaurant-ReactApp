import './Home.css'
import 'bootstrap/dist/css/bootstrap.css'
import Image1 from './Images/image1.jpg'
import Image2 from './Images/image2.jpg'
import Image3 from './Images/image3.jpg'
import { useState } from 'react'
export default function Home() {
    const [images,setImages ]= useState([Image1,Image2,Image3])
    const [currentImage,setCurrentImage] = useState(images[0])
  return (
    <div className='home'>
          <img className='slider' src={currentImage} alt="Restaurant Image" />
    </div>
  )
}
