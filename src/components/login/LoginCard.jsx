import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Input,
    Button,
    Stack,
    Text
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { setTokensCookie, getTokensFromCookie, REFRESH_TOKEN_HEADER, ACCESS_TOKEN_HEADER } from '../../helpers/cookies';

const LoginCard = () => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    });


    const updateUsername = e => {
        setIsError(false);
        setLoginInput({
            ...loginInput,
            username: e.target.value
        });
    }

    const updatePassword = e => {
        setIsError(false);
        setLoginInput({
            ...loginInput,
            password: e.target.value
        });
    }

    const loginUser = () => {
        if (loginInput['username'] == '' || loginInput['password'] == '') {
            setIsError(true);
            return;
        }

        axios.post('http://localhost:6001/login', {
            username: loginInput['username'],
            password: loginInput['password']
        }).then(res => {
            let user = JSON.stringify(res.data);
            localStorage.setItem('user', user);

            setTokensCookie({
                refresh_token: res.headers.REFRESH_TOKEN_HEADER,
                access_token: res.headers.ACCESS_TOKEN_HEADER 
            });

            let tokens = getTokensFromCookie();
            console.log(tokens)

            navigate('/search');
        }).catch( err => {
            console.log(err)
            toast.error("Login unsuccessful, please try again.");
        })
    };

    const toRegister = () => {
        navigate('/register');
    }

    return (
        <Card minWidth='md'>
            <CardHeader>
                <Heading size='md'>Pokédex Log-in</Heading>
            </CardHeader>

            <Flex direction='column' alignItems='center'>
                <CardBody>
                    <Heading size='xs' textTransform='uppercase'>
                        Username
                    </Heading>
                    <Input
                        mb='5'
                        size='md'
                        w='20rem'
                        isInvalid={isError}
                        onChange={updateUsername}
                    />
                    <Heading size='xs' textTransform='uppercase'>
                        Password
                    </Heading>
                    <Input
                        mb='5'
                        size='md'
                        w='20rem'
                        isInvalid={isError}
                        onChange={updatePassword}
                    />
                    {
                        isError?
                            <Text color='red'>
                                Provide a password and username.
                            </Text> : 
                            <></>
                    }
                </CardBody>

                <CardFooter>
                    <Stack>
                        <Button
                            colorScheme='teal'
                            minW='xs'
                            onClick={loginUser}
                        >
                            Log-in
                        </Button>

                        <Button
                            colorScheme='teal'
                            variant='ghost'
                            minW='xs'
                            onClick={toRegister}
                        >
                            Register
                        </Button>
                    </Stack>
                </CardFooter>
            </Flex>

        </Card>
    );
}

export default LoginCard;