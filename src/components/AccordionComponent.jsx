import { useState } from 'react'
import { HStack, Image, Box, VStack, Text, Button } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

import person1 from '../assets/avatar-ali.png'
import person2 from '../assets/avatar-anisha.png'
import person3 from '../assets/avatar-richard.png'
import person4 from '../assets/avatar-shanai.png'

const questionsArray = [
    {
      question: "¿Tienen reembolsos los cursos?",
      answer: "Sí, ofrecemos reembolsos para nuestros cursos en caso de que el estudiante decida cancelar dentro de un período de tiempo específico. Sin embargo, pueden aplicarse ciertas condiciones. Te recomendamos revisar nuestras políticas de reembolso para obtener más detalles."
    },
    {
      question: "¿Cuáles son los requisitos para inscribirse en los cursos de RRHH?",
      answer: "Los requisitos varían según el curso específico, pero en general, solo necesitas tener un interés en el campo de Recursos Humanos y una disposición para aprender. No se requieren conocimientos previos en RRHH, ya que nuestros cursos están diseñados tanto para principiantes como para profesionales con experiencia."
    },
    {
      question: "¿Qué modalidades de estudio ofrecen?",
      answer: "Ofrecemos cursos tanto en modalidad presencial como en línea. Nuestra plataforma en línea te brinda acceso a materiales didácticos, tareas, evaluaciones y sesiones interactivas. Además, contamos con aulas físicas equipadas con las herramientas necesarias para un aprendizaje práctico y colaborativo."
    },
    {
      question: "¿Cómo puedo obtener un certificado después de completar un curso?",
      answer: "Una vez que hayas completado exitosamente un curso, recibirás un certificado oficial que acredite tu logro. Nuestro sistema automáticamente genera los certificados en formato digital, los cuales podrás descargar desde tu perfil en nuestra plataforma. Estos certificados son reconocidos en la industria y pueden ser una valiosa adición a tu currículum."
    },
    {
      question: "¿Hay oportunidades laborales o pasantías disponibles después de los cursos?",
      answer: "Sí, nos esforzamos por ayudar a nuestros estudiantes a conectar con oportunidades laborales en el campo de RRHH. Trabajamos en colaboración con diversas empresas y organizaciones que buscan profesionales capacitados en Recursos Humanos. Además, ofrecemos programas de pasantías para brindarte experiencia práctica y fortalecer tu perfil profesional."
    }
  ];
  



function AccordionComponent() {

    return (
        <Accordion w={'80%'}>
            {questionsArray.map((item, index) => (
                    <AccordionItem key={index}>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            {item.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        {item.answer}
                        </AccordionPanel>
                    </AccordionItem>
                
            ))}
        </Accordion>
      );
}

export default AccordionComponent