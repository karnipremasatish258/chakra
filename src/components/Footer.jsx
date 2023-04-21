import React from 'react';
import {Box, Heading, VStack, Stack, HStack, Button, Input, Text} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'}>
                  <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get more updates
                  </Heading>
                  <HStack borderBottom={'2px solid white'}>
                        <Input placeholder='Enter Email Here...' focusBorderColor='none' border={'none'}  borderRadius={'none'} outline={'none'}/>
                        <Button p={'0'} color={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                              <AiOutlineSend size={'20'}/>
                        </Button>
                  </HStack>
            </VStack>
            <VStack textTransform={'uppercase'} textAlign={'center'} alignItems={'stretch'} w={'full'} borderRight={['none', '1px solid white']} borderLeft={['none', '1px solid white']}>
                  <Heading>
                        Video Hub
                  </Heading>
                  <Text>All rights received</Text>
            </VStack>
            <VStack alignItems={'center'} w={'full'}>
                  <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                  </Heading>
                  <Button variant={'link'} colorScheme={'white'}>
                        <a target={'blank'} href="https://www.youtube.com/">youtube</a>
                  </Button>
                  <Button variant={'link'} colorScheme={'white'}>
                        <a target={'blank'} href="https://www.instagram.com/">Instagram</a>
                  </Button>
                  <Button variant={'link'} colorScheme={'white'}>
                        <a target={'blank'} href="https://www.github.com/">GitHub</a>
                  </Button>
            </VStack>
            
      </Stack>
    </Box>
  )
}

export default Footer