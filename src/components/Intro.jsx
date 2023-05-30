import { useState } from 'react'
import { HStack, Image, Heading, VStack, Text } from '@chakra-ui/react'

function Intro() {
 // const [count, setCount] = useState(0)

  return (
    <HStack bgColor={'brand.secondary'} w='100%' justify='space-between' px='4rem' pb='6rem' pt='12rem'>
      <VStack spacing={4} align='flex-start'>
        <Heading fontSize='4xl' fontWeight='bold'>Un poco sobre nosotros...</Heading>
        <Text fontSize='xl'>
        Somos un grupo de profesionales que busca educar, acompañar, capacitar y orientar para que cada persona logre sus objetivos profesionales. Nos une la pasión por el progreso y el desarrollo. Valoramos el compañerismo, la lealtad y compromiso de cada integrante de nuestro equipo. Buscamos, aprender, debatir, compartir y construir colaborativamente para crecer cada día.
        </Text>
      </VStack>
    </HStack>
  )
}

export default Intro