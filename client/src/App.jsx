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
import Logout from './components/logout/Logout'
import Create from './components/create/Create'
import Edit from './components/edit/Edit'
import UserProvider from './providers/UserProvider'
import AuthGuard from './components/guards/AuthGuard'
import GoogleMapComponent from './components/location/Location'
import Profile from './components/profile/Profile'
import {ToastContainer} from 'react-toastify'
import NotFound from './components/not-found/NotFound'
function App() {

  return (
    <UserProvider>
      <>
        <div className="header_section">
          
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/coffees' element={<Catalog />} />
            <Route path='/blog' element={<Blog />} />
            <Route element={<AuthGuard />}>
              <Route path='/create' element={<Create />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/coffees/:coffeeId/edit' element={<Edit />} />
            </Route >
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/coffees/:coffeeId/details' element={<Details />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/google' element={<GoogleMapComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <ToastContainer />
        <Footer />
      </>
    </UserProvider>
  )
}

export default App
