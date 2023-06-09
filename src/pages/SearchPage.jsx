import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Text,
    Flex,
    Spinner
} from '@chakra-ui/react';
import Pagination from '../components/search/Pagination';
import Page from '../components/search/Page';
import SearchBox from '../components/search/SearchBox';
import toast from 'react-hot-toast';
import Navbar from '../components/layout/Navbar';
import logRequest from '../helpers/logging';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {

    const PAGE_SIZE = 10;
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [userInputs, setUserInputs] = useState({
        searchName: '',
        filterTypes: []
    });
    const [isLoading, setIsLoading] = useState(false);
    const axiosJWT = axios.create();
    const server = 'https://pokemon-server-h0eu.onrender.com';
    const navigate = useNavigate();

    axiosJWT.interceptors.request.use(async (config) => {
        let decodedAccessToken = jwt_decode(localStorage.getItem('access_token'));
        if (decodedAccessToken.exp < Date.now() / 1000) {
            try {
                const res = await axios.get(`${server}/requestNewAccessToken`, {
                    headers: {
                        'auth-token-refresh': localStorage.getItem('refresh_token')
                    }
                })
                localStorage.setItem('access_token', res.headers['auth-token-access']);
                config.headers['auth-token-access'] = res.headers['auth-token-access'];
            } catch (err) {
                toast.error('Your session has expired. Please log-in again.');
                navigate('/');
            }
        }
        console.log(config);
        return config;
    }, err => {
        return Promise.reject(err);
    });

    useEffect(() => {
        filterPokemons(userInputs);
    }, [userInputs]);

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    const fetchData = async () => {
        let storedData = localStorage.getItem('pokemons');
        if (!storedData) {
            axiosJWT.get(`${server}/pokemons`, {
                headers: {
                    'auth-token-access': localStorage.getItem('access_token')
                }
            })
                .then((res) => {
                    localStorage.setItem('pokemons', JSON.stringify(res.data));
                    storedData = JSON.parse(localStorage.getItem('pokemons'));
                    setAllPokemons(storedData);
                    setPokemons(storedData);
                    logRequest('/pokemons', res.status);
                    setIsLoading(false);
                    return;
                }).catch(err => {
                    localStorage.setItem('pokemons', []);
                    toast.error(`Error retreiving pokemons: ${err}. Refresh the page and try again.`)
                    logRequest('/pokemons', err.response.status);
                });
        }
        storedData = JSON.parse(localStorage.getItem('pokemons'));
        setAllPokemons(storedData);
        setPokemons(storedData);
        setIsLoading(false);
    };

    const filterPokemons = async (inputs) => {
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
            <Navbar />

            <Flex direction='column' m='5' alignItems='center'>
                <Text fontSize='3xl'>Search Pokémons</Text>

                <SearchBox
                    inputs={userInputs}
                    setUserInputs={setUserInputs}
                />

                {
                    isLoading && <Spinner color='teal' size='xl' mt='5' />
                }

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
