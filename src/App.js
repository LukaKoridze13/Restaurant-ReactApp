import 'bootstrap/dist/css/bootstrap.css'
import './reset.css'
import { Route, Routes } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Cart from './Cart';
import Error from './Error';
function App() {
  return (
    <div style={{width:'100%', maxWidth: '1920px', margin:'0 auto'}}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index  element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='shoppingcart' element={<Cart />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
