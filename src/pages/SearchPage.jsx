import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Heading,
    Box,
    Input,
    Text,
    CheckboxGroup,
    Checkbox,
    Flex,
    Stack
} from '@chakra-ui/react';
import Pagination from '../components/search/Pagination';
import Page from '../components/search/Page';

const SearchPage = () => {

    const PAGE_SIZE = 10;
    const [pokemons, setPokemons] = useState([]);
    const [currPage, setCurrPage] = useState(1);


    const fetchData = async () => {
        let storedData = localStorage.getItem('pokemons');
        if (!storedData) {
            axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
                .then((res) => {
                    localStorage.setItem('pokemons', JSON.stringify(res.data));
                });
        }
        storedData = localStorage.getItem('pokemons');
        setPokemons(JSON.parse(storedData));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const { isInvalidName, setIsInvalidName } = useState(false);

    return (
        <>
            <Heading>Search For Pokemons!</Heading>
            <Box
                m={3}
                p={4}
                minWidth='lg'
                borderWidth='1px'
                borderRadius='lg'
            >
                <Text>Pokemon Name:</Text>
                <Input
                    maxWidth='md'
                    isInvalid={isInvalidName}
                    placeholder="Search pokemon by name..."
                    size='md'
                />

                <Text mt={3}>Pokemon Type (check all that apply):</Text>
                <CheckboxGroup colorScheme='green'>
                    <Stack spacing={3} direction='row' my={3}>
                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Normal'>Normal</Checkbox>
                            <Checkbox value='Fighting'>Fighting</Checkbox>
                            <Checkbox value='Flying'>Flying</Checkbox>
                            <Checkbox value='Dragon'>Dragon</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Poison'>Poison</Checkbox>
                            <Checkbox value='Ground'>Ground</Checkbox>
                            <Checkbox value='Rock'>Rock</Checkbox>
                            <Checkbox value='Dark'>Dark</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Bug'>Bug</Checkbox>
                            <Checkbox value='Ghost'>Ghost</Checkbox>
                            <Checkbox value='Steel'>Steel</Checkbox>
                            <Checkbox value='Fairy'>Fairy</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Fire'>Fire</Checkbox>
                            <Checkbox value='Water'>Water</Checkbox>
                            <Checkbox value='Grass'>Grass</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Electric'>Electric</Checkbox>
                            <Checkbox value='Psychic'>Psychic</Checkbox>
                            <Checkbox value='Ice'>Ice</Checkbox>
                        </Stack>
                    </Stack>
                </CheckboxGroup>
            </Box >

            <Flex direction='column' m='5' alignItems='center'>
                    <Page
                        pokemons={pokemons}
                        pageSize={PAGE_SIZE}
                        currPage={currPage}
                    />

                    <Pagination
                        pokemons={pokemons}
                        pageSize={PAGE_SIZE}
                        currPage={currPage}
                        setCurrPage={setCurrPage}
                    />
            </Flex>
        </>
    );
};

export default SearchPage;
