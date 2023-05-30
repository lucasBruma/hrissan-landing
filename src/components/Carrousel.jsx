import { useState } from 'react'
import { HStack, Image, Box, VStack, Text, Button } from '@chakra-ui/react'
import Card from "./Card";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Dots.css'

import person1 from '../assets/avatar-ali.png'
import person2 from '../assets/avatar-anisha.png'
import person3 from '../assets/avatar-richard.png'
import person4 from '../assets/avatar-shanai.png'

const comments = [
    {
        image: person1,
        name: 'Ali Bravo',
        text: `“Hemos podido cancelar muchas otras suscripciones desde que usamos
        Administrar. No hay más confusión entre canales y todo el mundo es mucho
        más concentrado.” `
    },
    {
        image: person2,
        name: 'Ana Li',
        text: `“Ha sobrealimentado el flujo de trabajo de nuestro equipo. La capacidad de mantener la visibilidad de hitos más importantes en todo momento mantiene a todos motivados.”`
    },
    {
        image: person3,
        name: 'Ricardo Watts',
        text: `“Manage nos permite proporcionar estructura y proceso. Nos mantiene organizados y enfocado ¡No puedo dejar de recomendarlos a todas las personas con las que hablo!” `
    },
    {
        image: person4,
        name: 'Lana Gough',
        text: ` “Su software nos permite rastrear, administrar y colaborar en nuestros proyectos. De donde sea. Mantiene a todo el equipo sincronizado sin ser intrusivo.”`
    }
]

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Carrousel() {

    return (
<Box gap='4rem' paddingTop={['0', null,'2rem']} textAlign='center' id='community'>
            <Box 
                fontSize={['30px','4xl']} 
                fontWeight='700' 
                lineHeight='1.1'
                px={['2rem',null,'6rem']}
                py='2rem'
            >Feedback</Box>
            <Carousel 
              removeArrowOnDeviceType={['tablet', 'mobile','desktop']} 
              showDots={true} 
              responsive={responsive} 
              autoPlay={true}
              autoPlaySpeed={2000}
              infinite={true}
              >
              {comments.map((comment,index)=>{
                return (
                <VStack key={index} cursor='grab' p='2rem' paddingBottom='4rem' textAlign='center' userSelect='none'>
                      <Image src={comment.image}></Image>
                      <Box fontWeight='800'>{comment.name}</Box>
                      <Box color='blue.light'>{comment.text}</Box>
                  </VStack>)
              })}
            </Carousel>
            <Button variant='solid' mt='3rem'>Contactanos</Button>
          </Box>
      );
}

export default Carrousel