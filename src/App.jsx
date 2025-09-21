
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
