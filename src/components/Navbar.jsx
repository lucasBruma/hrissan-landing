import { useState } from 'react'
import { HStack, Image, Button } from '@chakra-ui/react'
import logo from '../assets/logo.png'


const buttons = ['Nosotros', 'Servicios', 'Comunidad', 'Contacto'];

function Navbar() {
 // const [count, setCount] = useState(0)

  return (
    <HStack position={'fixed'} justifyContent='space-between' alignItems='center' w='100%' px='2rem' bgColor={'brand.primary'} h='120px' zIndex={10}>
      <Image src={logo} maxW={'300px'} h={'100%'} objectFit={'cover'} alt={logo} />
      <HStack>
        {buttons.map((name, index) => (
            <Button variant='outline' key={index}>{name}</Button>
        ))}
      </HStack>
    </HStack>
  )
}

export default Navbar
