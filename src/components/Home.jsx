import React from 'react';
import {Box, Container, Heading, Img, Stack, Text, Image} from "@chakra-ui/react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
// import { BiBookOpen } from 'react-icons/bi';

const headingOptions ={
      pos:'absolute',
      top:'50%',
      left:'50%',
      transform:'translate(-50%,-50%)',
      textTransform:"uppercase",
      p:'4',
      borderRadius:'2xl'
};

const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container maxW={'container.xl'} minH={'100vh'}  p='16'>
            <Heading  textTransform={'uppercase'} m={'auto'} py={2} w={'fit-content'} borderBottom={'2px solid'}>
                  Services
            </Heading>
            <Stack 
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            >
            <Img src={img5} h={['40', '300']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Gambling (also known as betting or gaming) a future sports contest or even an entire sports season.
            Gambling is also a major international commercial activity, with the legal gambling market totaling an estimated $335 billion in 2009.[6] In other forms, gambling can be conducted with materials that have a value, but are not real money. For example, players of marbles games might wager marbles, and likewise games of Pogs or Magic: The Gathering can be played with the collectible game pieces (respectively, small discs and trading cards) as stakes, resulting in a meta-game regarding the value of a player's collection of pieces.
            </Text>
            </Stack>
      </Container>
    </Box>
  )
}

const MyCarousel = ()=> (
      <Carousel  autoPlay infiniteLoop interval={1700} showStatus={false} showArrows={false} showThumbs={false} >
            <Box w={'full'} h={'100vh'}>
                  <Image src={img3} />
                  <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch the future</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>  
                  <Image src={img4} />
                  <Heading bgColor={"whiteAlpha.500"} color={'black'} {...headingOptions}>Future is Gaming</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                  <Image src={img2} />
                  <Heading bgColor={"whiteAlpha.500"} color={'black'} {...headingOptions}>Gaming on console</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                  <Image src={img1} />
                  <Heading bgColor={"whiteAlpha.500"} color={'black'} {...headingOptions}>Night life is cool</Heading>
            </Box>
      </Carousel>
)

export default Home;