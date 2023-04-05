import React from 'react';
import {
    Flex,
    Text,
    Center,
    Image,
} from '@chakra-ui/react';
import PokemonItem from './PokemonItem';
import uuid from 'react-uuid';

const Page = ({ pokemons, pageSize, currPage, userInputs }) => {

    const startIndex = (currPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    pokemons = pokemons.slice(startIndex, endIndex);

    return (
        <Flex wrap='wrap' alignItems='center' gap='5' margin='5rem'>
            {
                pokemons.map(poke => {
                    return (
                        <>
                            {true ?
                                <PokemonItem
                                    poke={poke}
                                    key={uuid()}
                                />
                                : <></>
                            }
                        </>
                    )
                })
            }
        </Flex>
    )
};

export default Page;
