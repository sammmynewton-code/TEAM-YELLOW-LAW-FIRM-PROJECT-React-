import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import News from './pages/News.jsx'
import Testimonial from './pages/Testimonial.jsx'
import Team from './pages/Team.jsx'
import Funfacts from './pages/Funfacts.jsx'
import Practiceareas from './pages/PracticeAreas.jsx'
import About from './pages/About.jsx'
import Legalfee from './pages/Legalfee.jsx'

function App() {


  return (
    <>
   <Header/>
   <main>
     <Routes>
      <Route path="/" element={
        <>
        <Home/>
         <About/>
         <Practiceareas/>
         <Team/>
         <Funfacts/>
         <FAQ/>
         <Contact/>
         <News/>

         </>
         }/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/testimonial" element={<Testimonial/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/funfacts" element={<Funfacts/>}/>
      <Route path="/practiceareas" element={<Practiceareas/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Legalfee/>}/>
     </Routes>
   </main>


   <Footer/>
   </>
  )
}

export default App
