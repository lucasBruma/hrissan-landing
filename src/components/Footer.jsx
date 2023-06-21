import React from 'react';
// import {Form} from '../Form';
import { 
    Box,
    Image,
    HStack, 
    Button,
    VStack, 
    Stack
     
} from '@chakra-ui/react';
import { Link, animateScroll as scroll } from "react-scroll";

import logo from '../assets/logo.png';
import iconLinkedin from '../assets/icon-linkedin.svg' 
import iconInstagram from '../assets/instagram-logo.svg';
// import { Link, animateScroll as scroll } from "react-scroll";


const sectionsRight = [{
    name:'Feedback',
    to: 'feedback'
  },
  {
    name:'Faqs',
    to: 'faqs'
  }]

const sectionsLeft = [{
    name: 'Nosotros',
    to: 'intro'
},
{
  name:'Propuestas',
  to: 'proposals'
}]

function Footer({mobile}) {
    return ( 
        <Stack 
            id='about'
            bg='black' 
            direction={['column-reverse', null, 'row']} 
            justifyContent='space-around' 
            py='3rem' 
            px={['2rem', null,'7rem']} 
            spacing={['4rem', null, null]}
            mt='5rem'
            >
            <Stack direction={['column-reverse',null,'column']} justifyContent='space-between' alignItems='center' spacing={['4rem', null]}>
                {mobile && <Box color='blue.light'>Copyright 2023. All Rights Reserved</Box>}
                <Image src={logo} pt='5px' maxWidth={['200px','150px']} objectFit={'cover'}/>
                <HStack spacing='1rem' justifyContent={['space-around',null]} width='100%'>
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
            </Stack>
            <HStack spacing={['5rem',null,'10rem']} >
                    <VStack spacing='.3rem' height='173px' alignItems='flex-start'>
                        {sectionsLeft.map((button, index) => ( 
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
                    </VStack>
                    <VStack spacing='.3rem' height='173px' alignItems='flex-start'>
                        {sectionsRight.map((button, index) => ( 
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
                    </VStack>
            </HStack>
            <VStack justifyContent='space-between' alignItems={['center',null,'flex-end']}>
                <Box color='white'>Copyright 2023. All Rights Reserved</Box>
            </VStack>
        </Stack>
    );
}

export default Footer;