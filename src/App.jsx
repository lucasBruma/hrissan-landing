import { useState } from 'react'
import { Heading, VStack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Team from './components/Team'
import Footer from './components/Footer'
import Faqs from './components/Faqs'
import WppBurble from './components/WppBurble'
import Proposal from './components/Proposal'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Intro/>
      <Proposal/>
      <Team/>
      <Faqs/>
      <Footer/>
      <WppBurble/>
    </>

  )
}

export default App
