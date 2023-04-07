import React from 'react';
import {
    Box,
    Center,
} from '@chakra-ui/react';
import LoginCard from '../components/login/LoginCard';

const LoginPage = () => {
    const bgStyle = {
        backgroundImage: 'url(https://i.imgur.com/FkGacKR.jpg)',
        backgroundSize: 'cover',
        backgorundPosition: 'center'
    }

    return (
        <Box style={bgStyle} h='100vh' flexGrow='true'>
            <Center
                h='100%'
                w='100%'
            >
                <LoginCard />
            </Center>
        </Box>
    );
};

export default LoginPage;
