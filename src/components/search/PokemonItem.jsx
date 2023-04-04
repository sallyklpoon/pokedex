import React from 'react';
import {
    Center,
    Image,
    Text
} from '@chakra-ui/react';

const PokemonItem = ({ poke }) => {

    const pokeImageSrc = id => {
        const pokeSrcNum = id.toString().padStart(3, '0');
        const srcLink = `https://github.com/fanzeyi/pokemon.json/raw/master/images/${pokeSrcNum}.png`;
        return srcLink;
    }


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
    );
}

export default PokemonItem;