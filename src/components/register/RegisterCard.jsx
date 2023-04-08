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
    Text,
    Select
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import logRequest from '../../helpers/logging';

const RegisterCard = () => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const [registerInput, setRegisterInput] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });


    const updateUsername = e => {
        setIsError(false);
        setRegisterInput({
            ...registerInput,
            username: e.target.value
        });
    }

    const updateEmail = e => {
        setIsError(false);
        setRegisterInput({
            ...registerInput,
            email: e.target.value
        })
    }

    const updatePassword = e => {
        setIsError(false);
        setRegisterInput({
            ...registerInput,
            password: e.target.value
        });
    }

    const updateRole = e => {
        setIsError(false);
        setRegisterInput({
            ...registerInput,
            role: e.target.value
        })
    }


    const registerUser = () => {
        axios.post('https://pokemon-server-h0eu.onrender.com/register', {
            username: registerInput['username'],
            password: registerInput['password'],
            email: registerInput['email']
        }).then( res => {
            toast.success('User registered successfully!');
            logRequest('/register', res.status);
        }).catch( err => {
            toast.error(`Registration failed: ${err}`);
            logRequest('/register', err.response.status);
        })
    };
        
    const toLogin = () => {
        navigate('/');
    }

    return (
        <Card minWidth='md'>
            <CardHeader>
                <Heading size='md'>Pokédex Register</Heading>
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
                        Email
                    </Heading>
                    <Input
                        mb='5'
                        size='md'
                        w='20rem'
                        isInvalid={isError}
                        onChange={updateEmail}
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
                    <Heading size='xs' textTransform='uppercase'>
                        Role
                    </Heading>
                    <Select 
                    placeholdeer='Select user role'
                    isInvalid={isError}
                    onChange={updateRole}
                    >
                        <option value='user'>User</option>
                        <option value='admin'>Administrator</option>
                    </Select>
                    {
                        isError ?
                            <Text color='red'>
                               All fields must be filled out.
                            </Text> :
                            <></>
                    }
                </CardBody>

                <CardFooter>
                    <Stack>
                        <Button
                            colorScheme='teal'
                            minW='xs'
                            onClick={registerUser}
                        >
                            Register
                        </Button>

                        <Button
                            colorScheme='teal'
                            variant='ghost'
                            minW='xs'
                            onClick={toLogin}
                        >
                            Back to Log-in
                        </Button>
                    </Stack>
                </CardFooter>
            </Flex>

        </Card>
    );
}

export default RegisterCard;