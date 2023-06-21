import { Box, VStack, Heading } from '@chakra-ui/react';
import AccordionComponent from './AccordionComponent';



function Faqs() {

    return (
        <VStack bgColor={'brand.secondary'} gap={6} justifyItems={'center'} pt='12rem' height='550px' id='faqs'>
            <Heading>Preguntas frecuentes</Heading>
            <AccordionComponent/>
        </VStack>
      );
}

export default Faqs