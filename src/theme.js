// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values

const colors = {
        brand: {
        primary: "#b62f38",
        secondary: "#fcf9f9",
        tertiary: "#b83a43",
    }
}

// const Button = {
//     baseStyle:{
//         fontWeight: "Light",
//         borderRadius: '30px',
//         _hover:{
//             boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.18)'
//         }
//     }, 
//     sizes: {
//         lg:{ //para tamaños lg solamente
//             fontWeight: 'bold'
//         }
//     },
//     variants:{
//         outline: {
//             _hover:{
//                 bg:'brand.primary',
//                 borderColor: 'brand.secondary'
//             }
//         },
//         'cta':{
//             textTransform: 'uppercase'
//         }
//     }, 

// }
// {colors, components: { Button }}

const fonts = {
    heading: 'Rubik, sans-serif',
    body:'Rubik, sans-serif'
}

const Button = {
    baseStyle:{
        backgroundColor: 'brand.primary',
    },
    variants: {
        outline: {
            color:'white',
            textTransform:'uppercase',
            fontWeight:'light',
            borderRadius:'0',
            letterSpacing: '1px',
            _hover:{
                  color:'black',
                  bg:'white'
              }
        },
        footer:{
            border: "0",
            fontWeight: "200",
            color: 'white',
          },
    }
}

const Heading = {
    variants: {
        banner:{
            textTransform:'uppercase', 
            fontWeight: 'light',
            letterSpacing: '5px', 
            color: 'white'
        }
    }
}

export const theme = extendTheme({fonts, colors, components: {Button, Heading}});