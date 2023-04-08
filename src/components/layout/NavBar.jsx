import React, { useEffect, useState }from 'react';
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
import logRequest from '../../helpers/logging';


const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
    }, []);

    const logoutUser = () => {
        axios.get('https://pokemon-server-h0eu.onrender.com/logout', {
            headers: {
                'auth-token-refresh': localStorage.getItem('refresh_token')
            }
        }).then(res => {
            logRequest('/logout', res.status);
            localStorage.clear();
            navigate('/');
        }).catch(err => {
            logRequest('/logout', err.response.status);
        })
    }

    const toSearch = () => {
        navigate('/search');
    }

    const toReports = () => {
        navigate('/admin');
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
                    <Button
                        variant='ghost'
                        colorScheme='teal'
                        m='3'
                        onClick={toSearch}
                    >
                        Search
                    </Button>
                    {
                        user?.role == 'admin' &&
                        <Button
                            variant='ghost'
                            colorScheme='teal'
                            m='3'
                            onClick={toReports}
                        >
                            Reports
                        </Button>

                    }
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

                        <Text as='b'>{user?.username}</Text>
                        <Avatar
                            name={user?.username}
                            size='sm'
                        />

                    </HStack>
                </Flex>
            </Box>
        </>
    );
};

export default Navbar;