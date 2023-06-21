import { useState } from 'react'
import { HStack, Image, Button } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import iconLinkedin from '../assets/icon-linkedin.svg' 
import iconInstagram from '../assets/instagram-logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";


const buttons = [{
    name: 'Nosotros',
    to: 'intro'
},
{
  name:'Propuestas',
  to: 'proposals'
},
{
  name:'Feedback',
  to: 'feedback'
},
{
  name:'Faqs',
  to: 'faqs'
}]

function Navbar() {
 // const [count, setCount] = useState(0)

  return (
    <HStack position={'fixed'} justifyContent='space-between' alignItems='center' w='100%' px='2rem' bgColor={'black'} h='120px' zIndex={10}>
      <Image src={logo} maxW={'300px'} h={'100%'} objectFit={'cover'} alt={logo} />
      <HStack>
        {buttons.map((button, index) => ( 
            <Link
              to={button.to}
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}
              key={index}
            >
          <Button variant='outline' key={index}>{button.name}</Button>
        </Link>
        ))}
        <a href='https://www.instagram.com' target='_blank' rel="noreferrer">
          <Image 
                  src={iconInstagram} 
                  cursor='pointer' 
                  height={'50px'}
                  width={'50px'}   
                  _hover={{
                      filter:'invert(58%) sepia(54%) saturate(470%) hue-rotate(323deg) brightness(103%) contrast(95%)'
                  }}
                  transition='.4s all ease'
                  >
            </Image>
        </a>
        <a href='https://www.linkedin.com/company/hrissan/' target='_blank' rel="noreferrer">
          <Image 
                  src={iconLinkedin} 
                  cursor='pointer' 
                  height={'50px'}
                  width={'50px'}   
                  _hover={{
                      filter:'invert(58%) sepia(54%) saturate(470%) hue-rotate(323deg) brightness(103%) contrast(95%)'
                  }}
                  transition='.4s all ease'
                  >
            </Image>
        </a>
      </HStack>
    </HStack>
  )
}

export default Navbar
