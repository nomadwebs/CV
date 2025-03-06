import React from 'react'
import { Navbar, Hero, About, Services, MyWork, Contact, Footer } from './Components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App