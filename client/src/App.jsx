import { Routes, Route } from 'react-router-dom'


import About from "./components/about/About"
import Blog from "./components/blog/Blog"
// import Catalog from "./components/catalog/Catalog"
import Contacts from "./components/contacts/Contact"
import Copyright from "./components/copyright/Copyright"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Testimonial from "./components/testimonial/Testimonial"
import Navigation from './components/navigation/Navigation'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Details from './components/details/Details'
import Coffees from './components/coffees/Coffees'

function App() {

  return (
    <>
      <div className="header_section">
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/catalog' element={<Coffees />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details' element={<Details />} />

        </Routes>

      </div>

      <Footer />
      <Copyright />
    </>
  )
}

export default App
