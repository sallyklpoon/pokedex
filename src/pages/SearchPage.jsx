import React, { useState } from 'react';
import {
    Heading,
    Box,
    Input,
    Text,
    CheckboxGroup,
    Checkbox,
    Stack,
    Grid,
    GridItem
} from '@chakra-ui/react';

const SearchPage = () => {
    const { isInvalidName, setIsInvalidName } = useState(false);

    return (
        <>
            <Heading>Search For Pokemons!</Heading>
            <Box
                borderWidth='1px'
                borderRadius='lg'
                maxW='md'
                m={3}
                p={4}
            >
                <Text>Pokemon Name:</Text>
                <Input
                    isInvalid={isInvalidName}
                    placeholder="Search pokemon by name..."
                    size='md'
                />

                <Text mt={3}>Pokemon Type (check all that apply):</Text>
                <CheckboxGroup colorScheme='green'>
                    <Grid templateColumns='reapeat(4, 1fr)' gap={3}>
                        <GridItem>
                            <Checkbox value='Normal'>Normal</Checkbox>
                        </GridItem>
                        <GridItem>
                            <Checkbox value='Fighting'>Fighting</Checkbox>
                        </GridItem>
                        <GridItem>
                            <Checkbox value='Flying'>Flying</Checkbox>
                        </GridItem>
                        <Checkbox value='Poison'>Poison</Checkbox>

                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Ground'>Ground</Checkbox>
                            <Checkbox value='Rock'>Rock</Checkbox>
                            <Checkbox value='Bug'>Bug</Checkbox>
                            <Checkbox value='Ghost'>Ghost</Checkbox>
                        </Stack>

                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Steel'>Steel</Checkbox>
                            <Checkbox value='Fire'>Fire</Checkbox>
                            <Checkbox value='Water'>Water</Checkbox>
                            <Checkbox value='Grass'>Grass</Checkbox>
                        </Stack>

                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Electric'>Electric</Checkbox>
                            <Checkbox value='Psychic'>Psychic</Checkbox>
                            <Checkbox value='Ice'>Ice</Checkbox>
                            <Checkbox value='Dragon'>Dragon</Checkbox>
                        </Stack>

                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Dark'>Dark</Checkbox>
                            <Checkbox value='Fairy'>Fairy</Checkbox>
                        </Stack>
                    </Grid>
                </CheckboxGroup>
            </Box >
        </>
    );
};

export default SearchPage;
