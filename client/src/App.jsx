import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import Catalog from "./components/catalog/Catalog"
import Contacts from "./components/contacts/Contact"
import Copyright from "./components/copyright/Copyright"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Testimonial from "./components/testimonial/Testimonial"

function App() {

  return (
    <>
      <Header />
      <About />
      <Catalog />
      <Testimonial />
      <Blog />
      <Contacts />
      <Footer />
      <Copyright />
    </>
  )
}

export default App
