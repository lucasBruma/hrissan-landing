import { useState } from 'react'
import { Heading } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Team from './components/Team'
import Footer from './components/Footer'
import Faqs from './components/Faqs'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Intro/>
      <Team/>
      <Faqs/>
      <Footer/>
    </>
  )
}

export default App
