import { useState } from 'react'
import { HStack, Image, Heading, VStack, Text } from '@chakra-ui/react'

function Intro() {
 // const [count, setCount] = useState(0)

  return (
    <HStack bgColor={'brand.secondary'} w='100%' justify='space-between' px='7rem' pb='8rem' pt='12rem' id='intro'>
      <VStack spacing={7}>
        <Heading fontSize='4xl' fontWeight='bold' mt='2rem'>Nosotros</Heading>
        <Text fontSize='xl' textAlign={'center'}>
          Consultora de Recursos Humanos que utiliza la tecnología e innovación en los procesos del área, acompañandote en el desarrollo de tu formación a través de un mindset digital, analítico y disruptivo.
        </Text>
      </VStack>
    </HStack>
  )
}

export default Intro