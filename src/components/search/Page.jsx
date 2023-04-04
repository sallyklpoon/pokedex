import React from 'react';

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
        <div className='page-container'>
            {
                pokemons.map(poke => {
                    return (
                        <div key={poke.id} className='poke-item center-flex-col'>
                            <img
                                className='poke-img'
                                alt={pokeImageSrc(poke.id)}
                                src={pokeImageSrc(poke.id)}></img>
                            <p>{poke.name.english}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Page;
