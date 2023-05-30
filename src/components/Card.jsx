import { useState } from 'react'
import { VStack, Image, HStack } from '@chakra-ui/react'


function Card({img, title}) {
    return (
            <VStack>
              <Image src={img} />
              <VStack justify={'start'} mt={4} w={'full'} spacing={3}>
                {title}
              </VStack>
 
            </VStack>
      );
}

export default Card