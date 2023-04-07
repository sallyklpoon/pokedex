import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Text,
    Flex
} from '@chakra-ui/react';
import Pagination from '../components/search/Pagination';
import Page from '../components/search/Page';
import SearchBox from '../components/search/SearchBox';
import toast from 'react-hot-toast';
import Navbar from '../components/layout/Navbar';

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
        filterPokemons(userInputs);
    }, [userInputs]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let storedData = localStorage.getItem('pokemons');
        if (!storedData) {
            axios.get('http://localhost:6001/pokemons')
                .then((res) => {
                    localStorage.setItem('pokemons', JSON.stringify(res.data));
                }).catch(err => {
                    localStorage.setItem('pokemons', []);
                    toast.error(`Error retreiving pokemons: ${err}. Refresh the page and try again.`)
                });
        }
        storedData = JSON.parse(localStorage.getItem('pokemons'));
        setAllPokemons(storedData);
        setPokemons(storedData);
    };

    const filterPokemons = async(inputs) => {
        let filteredPoke = allPokemons;
        if (inputs['filterTypes'].length !== 0) {
            filteredPoke = filteredPoke.filter(poke => {
                return inputs['filterTypes'].every(type => poke['type'].includes(type));
            })
        }
        if (inputs['searchName'] !== '') {
            filteredPoke = filteredPoke.filter(poke => {
                return poke['name']['english'].toLowerCase().includes(inputs['searchName'].toLowerCase())
            });
        }
        setPokemons(filteredPoke);
        setCurrPage(1);
    };

    return (
        <>
            <Navbar/>

            <Flex direction='column' m='5' alignItems='center'>
            <Text fontSize='3xl'>Search Pokémons</Text>

                <SearchBox
                    inputs={userInputs}
                    setUserInputs={setUserInputs}
                />

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
