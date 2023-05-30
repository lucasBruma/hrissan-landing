import { useState } from 'react'
import { Heading } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Intro/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App
