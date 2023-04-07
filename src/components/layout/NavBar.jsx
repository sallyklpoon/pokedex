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

const NavBar = () => {
    const navigate = useNavigate();

    const getUsername = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.username;
    }

    const logoutUser = () => {
        
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

export default NavBar;