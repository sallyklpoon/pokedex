import React from 'react';
import {
    Box,
    Center,
    Flex
} from '@chakra-ui/react';
import RegisterCard from '../components/register/RegisterCard';


const RegisterPage = () => {
    const bgStyle = {
        backgroundImage: 'url(https://i.imgur.com/ksenWPX.jpg)',
        backgroundSize: 'cover',
        backgorundPosition: 'center'
    }

    return (
        <Box style={bgStyle} h='100vh' flexGrow='true'>
            <Center
                h='100%'
                w='100%'
            >
                <RegisterCard />
            </Center>
        </Box>
    )
}

export default RegisterPage;
