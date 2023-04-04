import React from 'react';
import {
    Button
} from '@chakra-ui/react';

const Pagination = ({ pokemons, pageSize, currPage, setCurrPage }) => {
    const PAGES_DISPLAYED = 10;
    const DISPLAY_HALF = PAGES_DISPLAYED / 2;
    const totalPages = Math.ceil(pokemons.length / pageSize);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
    let displayNumbers;
    if (currPage < DISPLAY_HALF) {
        displayNumbers = pageNumbers.slice(0, PAGES_DISPLAYED)
    } else if (currPage >= totalPages - DISPLAY_HALF) {
        displayNumbers = pageNumbers.slice(totalPages - PAGES_DISPLAYED, totalPages)
    } else {
        displayNumbers = pageNumbers.slice(currPage - DISPLAY_HALF, currPage + DISPLAY_HALF);
    }

    const nextPage = () => setCurrPage(currPage + 1);
    const prevPage = () => setCurrPage(currPage - 1);

    return (
        <>
            {
                currPage !== 1 ?
                    <Button
                        minW='70px'
                        onClick={prevPage}
                    >
                        Prev
                    </Button>
                    :
                    <></>
            }
            {
                displayNumbers.map(number => {
                    return (
                        <Button
                            minW='60px'
                            key={number}
                            onClick={() => setCurrPage(number + 1)}
                            colorScheme='teal'
                            variant={currPage === number + 1 ? 'solid' : 'ghost'}
                        >
                            {number + 1}
                        </Button>
                    )
                })
            }
            {
                currPage !== totalPages ?
                    <Button
                        minW='70px'
                        onClick={nextPage}
                    >
                        Next
                    </Button>
                    :
                    <></>
            }
        </>
    )
};

export default Pagination;
