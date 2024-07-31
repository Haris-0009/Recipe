import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header/>
     <Hero/>
     <Content/>
     <Footer/>
    </div>
  )
}

export default App
