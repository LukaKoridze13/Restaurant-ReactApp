import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Cart from './Cart';
import Error from './Error';
import Footer from './Footer'
import './fonts.css'
import SingleProduct from './SingleProduct';
import { Context } from './Context.js';
import { useState, useEffect } from 'react'
import LoginPage from './LoginPage';
import Register from './Register';
import Profile from './Profile';
import OrderPage from './OrderPage';
let link = require('./data.json')
if (JSON.parse(window.localStorage.getItem('data')) === null) {
  window.localStorage.setItem('data', JSON.stringify(link))
  window.localStorage.setItem('cart', JSON.stringify(["Your cart is empty"]))
  window.localStorage.setItem('num', "0")
  window.localStorage.setItem('price', "0")
  window.localStorage.setItem('currency', "$")
}
if(JSON.parse(window.localStorage.getItem('signed'))=== null){
  window.localStorage.setItem('signed', JSON.stringify("Login"))
}
function App() {
  let [data, setData] = useState(JSON.parse(localStorage.getItem('data')))
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem('num')));
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')))
  const [fullPrice, setFullPrice] = useState(JSON.parse(localStorage.getItem('price')))
  const [currency, setCurrency] = useState(localStorage.getItem('currency'))
  const [logged,setLogged] = useState(JSON.parse(localStorage.getItem('signed')))
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('currentUser')))
  const [rere, setRere] = useState(true)
  const [coords, setCoords] = useState(JSON.parse(localStorage.getItem('location')))
  function set(e){
    setUser(e)
  }
  let navigate= useNavigate()
  function login(){
    if(logged === "Login"){
      navigate('/Restaurant-ReactApp/login')
    }
    if(logged === "Log Out"){
      navigate('/Restaurant-ReactApp/')
      setLogged('Login')
      window.localStorage.removeItem('currentUser')
    }
  }
  function setCoordsFunc(x,y){
    setCoords([x,y])
  }
  function loginSubmit(){
    logged === "Login" ? setLogged("Log Out") : setLogged("Login")
  }
  function dt(x){
    setData(x)
  }
  function calcFP(){
    let sum=0;
    data.map((item)=>{
      if(item.status === "Added"){
        sum+=item.price*JSON.parse(window.localStorage.getItem(`${item.name}`))
      }
    })
    setFullPrice(sum)
  }
  function addFP(x) {
    setFullPrice(fullPrice + x)
  }
  function addNB() {
    setNumber(number + 1)
  }
  function remNB() {
    setNumber(number - 1)
  }
  function plFB(x) {
    setFullPrice(fullPrice + x)
  }
  function mnFB(x) {
    setFullPrice(fullPrice - x)
  }
  function tmFB(x) {
    setFullPrice(Math.round(fullPrice * x))
  }
  function mtFB(x) {
    setFullPrice(Math.round(fullPrice / x))
  }
  function clNB() {
    setNumber(0)
  }
  function clFP() {
    setFullPrice(0)
  }
  function stCR(x) {
    setCurrency(x)
  }
  function reset() {
    rere === false ? setRere(true) : setRere(false)
  }
  function showPosition(position) {
    setCoords([position.coords.longitude, position.coords.latitude])
  }
  useEffect(() => {
    if(coords===!undefined || coords ===!null){
      navigator.geolocation.getCurrentPosition(showPosition)
    }
    window.localStorage.setItem('location',JSON.stringify(coords))
    window.localStorage.setItem('data', JSON.stringify(data))
    window.localStorage.setItem('cart', JSON.stringify(cartProducts))
    window.localStorage.setItem('num', JSON.stringify(number))
    window.localStorage.setItem('price', JSON.stringify(fullPrice))
    window.localStorage.setItem('currency', currency)
    window.localStorage.setItem('signed', JSON.stringify(logged))
  })
  return (
    <Context.Provider value={[number, addNB, data, cartProducts, fullPrice, addFP, plFB, mnFB, remNB, clNB, clFP, currency, stCR, reset, tmFB, mtFB,dt,calcFP,logged,login,loginSubmit,set,user,coords,setCoordsFunc]}> 
    {/* sul 25 */}
      <div style={{ width: '100%', maxWidth: '1920px', margin: '0 auto', fontFamily: 'Akshar' }}>
        <Routes>
          <Route path="/Restaurant-ReactApp/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='/Restaurant-ReactApp/menu/:id' element={<SingleProduct />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='shoppingcart' element={<Cart />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='orders' element={<OrderPage />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
