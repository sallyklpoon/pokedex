import React from 'react';
import { useNavigate } from 'react-router';
import {
    Box,
    Button,
    Text,
    Flex,
    Spacer,
    Avatar,
    HStack
} from '@chakra-ui/react';
import axios from 'axios';
import { REFRESH_TOKEN_HEADER } from '../../helpers/auth';

const Navbar = () => {
    const navigate = useNavigate();

    const getUsername = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.username;
    }

    const logoutUser = () => {
        axios.get('http://localhost:6001/logout', {
                REFRESH_TOKEN_HEADER: localStorage.getItem(REFRESH_TOKEN_HEADER)   
        }).then( res => {
            localStorage.clear();
            navigate('/');
        })
    }

    return (
        <>
            <Box
                h='4rem'
                backgroundColor='#90E4C1'
                boxShadow='sm'
            >
                <Flex alignItems='center' h='100%' maxWidth='100vw' px='5'>
                    <Text fontSize='3xl' >Pokédex</Text>
                    <Spacer />
                    <HStack >

                        <Button
                            variant='ghost'
                            colorScheme='teal'
                            mr='3'
                            onClick={logoutUser}
                        >
                            Logout
                        </Button>

                        <Text as='b'>{getUsername()}</Text>
                        <Avatar
                            name={getUsername()}
                            size='sm'
                        />

                    </HStack>
                </Flex>
            </Box>
        </>
    );
};

export default Navbar;