import Navbar from './page/Navbar.jsx'
import Hero from './page/Home.jsx'
import AboutAndSkills from './page/About.jsx'
import Projects from './page/Project.jsx'
import Contact from './page/Contact.jsx'
import Footer from './page/Footer.jsx'

function App() {

  return (
    <div className="bg-dark min-vh-100">
      <Navbar />
      <main>
        <Hero />
        <AboutAndSkills />
        <Projects />
        <Contact/>
        <Footer />
      </main>
    </div>
  )
}
    

export default App
