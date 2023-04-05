import React from 'react';
import {
    Flex,
    Text,
    Center,
    Image,
} from '@chakra-ui/react';
import PokemonItem from './PokemonItem';

const Page = ({ pokemons, pageSize, currPage, userInputs }) => {

    const startIndex = (currPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    pokemons = pokemons.slice(startIndex, endIndex);

    const matchesUserInput = poke => {
        let intersectFilterTypes = poke['type'].filter(type => userInputs['filterTypes'].includes(type));
        let nameIncludesSearch = poke['name']['english'].toLowerCase().includes(userInputs['searchName'].toLowerCase());
        return nameIncludesSearch && intersectFilterTypes;
    }

    return (
        <Flex wrap='wrap' alignItems='center' gap='5' margin='5rem'>
            {
                pokemons.map(poke => {
                    return (
                        <>
                            {poke['type'].filter(type => userInputs['filterTypes'].includes(type)).length != 0
                            && poke['name']['english'].toLowerCase().includes(userInputs['searchName'].toLowerCase()) ?
                                <PokemonItem
                                    poke={poke}
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
