import AboutUs from "./components/AboutUs"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavHero from "./components/NavHero"
import OurProtein from "./components/OurProtein"
import Testimonial from "./components/Testimonial"


function App() {


  return (
    <div className="App overflow-x-hidden">
      <NavHero/>
      <OurProtein/>
      <AboutUs/>
      <Body/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
