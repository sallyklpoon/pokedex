import React, { useState } from 'react';
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

const LoginCard = () => {
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
        console.log(loginInput);
        setIsError(true);
    };

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
                                The login information is incorrect.
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
                            Log in
                        </Button>

                        <Button
                            colorScheme='teal'
                            variant='ghost'
                            minW='xs'
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