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
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [userInputs, setUserInputs] = useState({
        searchName: '',
        filterTypes: []
    });

    useEffect(() => {
        fetchData();
        filterPokemons(userInputs);
    }, [userInputs]);


    const fetchData = async () => {
        let storedData = localStorage.getItem('pokemons');
        if (!storedData) {
            axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
                .then((res) => {
                    localStorage.setItem('pokemons', JSON.stringify(res.data));
                });
        }
        storedData = JSON.parse(localStorage.getItem('pokemons'));
        setAllPokemons(storedData);
        setPokemons(storedData);
    };

    const filterPokemons = async(inputs) => {
        let filteredPoke = allPokemons;
        if (inputs['filterTypes'].length != 0) {
            filteredPoke = filteredPoke.filter(poke => {
                poke['type'].filter(type => inputs['filterTypes'].includes(type));
            })
        }
        if (inputs['searchName'] != '') {
            filteredPoke = filteredPoke.filter(poke => {
                return poke['name']['english'].toLowerCase().includes(inputs['searchName'].toLowerCase())
            });
        }
        setPokemons(filteredPoke);
    };

    return (
        <>
            <Text fontSize='5xl'>Search For Pokemons!</Text>

            <Flex direction='column' m='5' alignItems='center'>
                <SearchBox
                    inputs={userInputs}
                    setUserInputs={setUserInputs}
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
