import React from 'react';
import {
    Image,
    Text,
    Center,
    Flex
} from '@chakra-ui/react'

const PageNotFound = () => {

    return (
        <Flex direction='column' alignItems='center' justifyContent='center' w='100vw' h='100vh'>
        <Text fontSize='6xl' color='teal'>Oops, Page Not Found</Text>
        <Text fontSize='2xl' color='grey'>This isn't a page route, silly!</Text>
        <Text fontSize='lg' color='grey'>Try '/' or '/search'</Text>
        <Image alt='pikachu' src='https://i.imgur.com/E6KRhst.png'/>
        </Flex>
    )
};

export default PageNotFound;