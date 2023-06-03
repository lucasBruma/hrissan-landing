import { Image, Link } from '@chakra-ui/react'
import iconWpp from '../assets/icon-whatsapp.svg'


function WppBurble() {
    return (
        <Link href='https://api.whatsapp.com/send?phone=+541163740329&text=Hola%20HRissan!%20Tengo%20una%20consulta%20sobre%20' position='fixed' bottom='15px' right='15px'  target='blank' zIndex='999'>
            <Image src={iconWpp} dropShadow='dark-lg' h={70} w={70} cursor='pointer' opacity='0.8' zIndex='999' _hover={{opacity: '1'}} transition='all 0.5s ease-in-out'/>
        </Link>
      );
}

export default WppBurble