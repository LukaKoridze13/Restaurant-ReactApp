import './Home.css'
import Slider from './Slider'
import Popular from './Popular'
export default function Home() {
  return (
    <div className = 'home' >
    <Slider />
    <Popular />
    </div>
  )
}
