import AboutUs from "./components/AboutUs"
import Body from "./components/Body"
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
    </div>
  )
}

export default App
