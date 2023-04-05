import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Text,
    Flex
} from '@chakra-ui/react';
import Pagination from '../components/search/Pagination';
import Page from '../components/search/Page';
import SearchBox from '../components/search/SearchBox';

const SearchPage = () => {

    const PAGE_SIZE = 10;
    const [pokemons, setPokemons] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [userInputs, setUserInputs] = useState({
        searchName: '',
        filterTypes: []
    });


    const fetchData = async () => {
        let storedData = localStorage.getItem('pokemons');
        if (!storedData) {
            axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
                .then((res) => {
                    localStorage.setItem('pokemons', JSON.stringify(res.data));
                });
        }
        storedData = JSON.parse(localStorage.getItem('pokemons'));
        setPokemons(storedData);
    };

    useEffect(() => {
        fetchData();
    }, [userInputs]);

    const { isInvalidName, setIsInvalidName } = useState(false);

    return (
        <>
            <Text fontSize='5xl'>Search For Pokemons!</Text>

            <Flex direction='column' m='5' alignItems='center'>
                <SearchBox
                    inputs={userInputs}
                    setUserInputs={setUserInputs}
                    isValidName={isInvalidName}
                />

                <Page
                    pokemons={pokemons}
                    pageSize={PAGE_SIZE}
                    currPage={currPage}
                    userInputs={userInputs}
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
