import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
// import Footer from './components/Footer'
import { About } from "./components/About";

function App() {
  return (
    <div className='text-white font-bold bg-gray-950  min-h-screen flex flex-col overflow-hidden  '>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* <h1>hello</h1> */}
      
      <NavBar/>
      <main className='flex-grow flex flex-col justify-center items-center'><Hero/> <About/></main>
      {/* <Footer/> */}
    </div>
  )
}

export default App;




