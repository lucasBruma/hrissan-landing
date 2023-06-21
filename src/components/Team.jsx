import { useState } from 'react'
import { HStack, Image, Button, Box } from '@chakra-ui/react'
import Carrousel from './Carrousel'

function Team() {
 // const [count, setCount] = useState(0)

  return (
    <Box px='2rem' pb='5rem' pt='8rem' w='full' bgColor='brand.secondary' id='feedback'>
        <Carrousel />
    </Box>
  )
}

export default Team