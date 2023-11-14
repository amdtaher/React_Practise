import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopFixedBannner from './Components/TopFixedBannner/TopFixedBannner'
import About from './Components/About/About'
import TopNavigation from './Components/TopNavigation/TopNavigation'
import Features from './Components/Features/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavigation/>
      <TopFixedBannner/> 
      <About/>
      <Features/>
    </>
  )
}

export default App
