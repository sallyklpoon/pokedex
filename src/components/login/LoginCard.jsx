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
import { ACCESS_TOKEN_HEADER, REFRESH_TOKEN_HEADER } from '../../helpers/auth';
import recordRequest from '../../helpers/trackRequests';

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
            localStorage.setItem('access_token', res.headers[ACCESS_TOKEN_HEADER]);
            localStorage.setItem('refresh_token', res.headers[REFRESH_TOKEN_HEADER]);
            navigate('/search');
            recordRequest('/login', res.status);
        }).catch( err => {
            console.log(err.response.status)
            toast.error("Login unsuccessful, please try again.");
            recordRequest('/login', err.response.status);
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