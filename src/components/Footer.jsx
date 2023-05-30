import React from 'react';
// import {Form} from '../Form';
import { 
    Box,
    Image,
    HStack, 
    Button,
    VStack, 
    Stack, 
} from '@chakra-ui/react';

import logo from '../assets/logo.png';
import iconFacebook from '../assets/icon-facebook.svg'
import iconYoutube from '../assets/icon-youtube.svg'
import iconTwitter from '../assets/icon-twitter.svg'
import iconPinterest from '../assets/icon-pinterest.svg'
import iconInstagram from '../assets/icon-instagram.svg';
// import { Link, animateScroll as scroll } from "react-scroll";

const sectionsLeft = [{
    href: 'nosotros',
    name: 'Nosotros'
  },
  {
    href: 'servicios',
    name: 'Servicios'
  },
  {
    href: 'comunidad',
    name: 'Comunidad'
  },
  {
    href: 'contacto',
    name: 'Contacto'
  }]

const sectionsRight = [{
    href: 'informacion',
    name: 'Informacion'
},
{
    href: 'mail',
    name: 'Mail'
},
{
    href: 'whatsapp',
    name: 'Whatsapp'
}]

const icons = [iconFacebook,iconYoutube,iconTwitter,iconPinterest,iconInstagram]

function Footer({mobile}) {
    return ( 
        <Stack 
            id='about'
            bg='brand.primary' 
            direction={['column-reverse', null, 'row']} 
            justifyContent='space-around' 
            py='3rem' 
            px={['2rem', null,'7rem']} 
            spacing={['4rem', null, null]}
            >
            <Stack direction={['column-reverse',null,'column']} justifyContent='space-between' alignItems='center' spacing={['4rem', null]}>
                {mobile && <Box color='blue.light'>Copyright 2023. All Rights Reserved</Box>}
                <Image src={logo} pt='5px' maxWidth={['200px','150px']} objectFit={'cover'}/>
                <HStack spacing='1rem' justifyContent={['space-around',null]} width='100%'>
                    {icons.map((icon, index)=>{
                        return <Image 
                                    key={index} 
                                    src={icon} 
                                    cursor='pointer' 
                                    height={['32px', '20px']}  
                                    _hover={{
                                        filter:'invert(58%) sepia(54%) saturate(470%) hue-rotate(323deg) brightness(103%) contrast(95%)'
                                    }}
                                    transition='.4s all ease'
                                    >
                            </Image>
                    })}
                </HStack>
            </Stack>
            <HStack spacing={['5rem',null,'10rem']} >
                    <VStack spacing='.3rem' textAlign='left' alignItems='flex-start'>
                        {sectionsLeft.map((section, index)=>{
                        return <Button variant='footer' key={index}>{section.name}</Button>
                        })}
                    </VStack>
                    <VStack spacing='.3rem' height='173px' alignItems='flex-start'>
                        {sectionsRight.map((section, index)=>{
                            return <Button variant='footer' key={index}>{section.name}</Button>
                        })}
                    </VStack>
            </HStack>
            <VStack justifyContent='space-between' alignItems={['center',null,'flex-end']}>
                <Box color='white'>Copyright 2023. All Rights Reserved</Box>
            </VStack>
        </Stack>
    );
}

export default Footer;