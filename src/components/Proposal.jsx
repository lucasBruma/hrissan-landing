import { useState } from 'react'

import { HStack, Image, Box, VStack, Text, Flex, Heading } from '@chakra-ui/react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Dots.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import proposal1 from '../assets/propuesta1.jpeg' 
import proposal2 from '../assets/propuesta2.jpeg' 
import proposal3 from '../assets/propuesta3.jpeg'

const proposals = [
    {
        image: proposal1,
    },
    {
        image: proposal2,
    },
    {
        image: proposal3,
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
      items: 1,
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

//   const breakpoints = {
//     320: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,  
//     },
//     768: {
//         slidesPerView: 2,
//     },
//     1024: {
//         slidesPerView: 1,
//         slidesPerGroup: 3, 
//     },
//     1440: {
//         slidesPerView: 1,
//     }

// }

function Proposal() {

    return (
      <VStack flexDirection={'column'} alignItems={'center'} spacing={10} bgColor={'brand.secondary'} justifyContent={'center'} id='proposals' pt='12rem'>
        <Heading>Propuestas</Heading>
        <Box width={'80%'} >
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{
              "--swiper-pagination-color": "#b62f38",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-navigation-color": "#b62f38",
              "--swiper-button-next": "#b62f38",
              "--swiper-button-prev": "#b62f38" 
            }}
          >
            {proposals.map((proposal, index) => {
              return (
                <SwiperSlide key={index}>
                  <Flex justifyContent={'center'} bgColor={'brand.secondary'} mb='4rem' cursor='grab'> 
                    <Image src={proposal.image} width={'600px'} height={'400px'} borderRadius={'10px'} alt="propuesta" />
                  </Flex>
                </SwiperSlide>
              )
              }
              )
            }
          </Swiper>
        </Box>
      </VStack>


    )
}

export default Proposal
