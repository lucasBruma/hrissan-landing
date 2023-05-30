import { useState } from 'react'
import { HStack, Image, Button, Box } from '@chakra-ui/react'
import Carrousel from './Carrousel'

function Team() {
 // const [count, setCount] = useState(0)

  return (
    <Box px='2rem' py='5rem' w='full' bgColor='brand.secondary'>
        <Carrousel />
    </Box>
  )
}

export default Team