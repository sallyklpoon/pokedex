import React from 'react';
import {
    Flex,
    Text,
    Center,
    Image,
} from '@chakra-ui/react';

const Page = ({ pokemons, pageSize, currPage }) => {

    const startIndex = (currPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    pokemons = pokemons.slice(startIndex, endIndex);

    const pokeImageSrc = id => {
        const pokeSrcNum = id.toString().padStart(3, '0');
        const srcLink = `https://github.com/fanzeyi/pokemon.json/raw/master/images/${pokeSrcNum}.png`;
        return srcLink;
    }

    return (
        <Flex wrap='wrap' alignItems='center' gap='3'>
            {
                pokemons.map(poke => {
                    return (
                        <div key={poke.id} className='poke-item center-flex-col'>
                            <Image
                                boxSize='15rem'
                                alt={pokeImageSrc(poke.id)}
                                src={pokeImageSrc(poke.id)}>
                            </Image>
                            <Center>
                                <Text fontSize='lg' mt='1' mb='3'>{poke.name.english}</Text>
                            </Center>
                        </div>
                    )
                })
            }
        </Flex>
    )
};

export default Page;
