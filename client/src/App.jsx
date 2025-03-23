import { Routes, Route } from 'react-router-dom'
import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Navigation from './components/navigation/Navigation'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Details from './components/details/Details'
import Catalog from './components/catalog/Catalog'
import { useState } from 'react'
import { UserContext } from './contexts/UserContext'
import Logout from './components/logout/Logout'
import Create from './components/create/Create'
import Shop from './components/shop/Shop'

function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    console.log(resultData);
    setAuthData(resultData);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  }

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <>
        <div className="header_section">
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/create' element={<Create />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/details' element={<Details />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </div>
        <Footer />
      </>
    </UserContext.Provider>
  )
}

export default App
