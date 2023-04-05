import React from 'react';
import {
    Box,
    Input,
    Text,
    CheckboxGroup,
    Checkbox,
    Stack,
    Heading
} from '@chakra-ui/react';

const SearchBox = ({ inputs, setUserInputs }) => {

    const updateSearchName = e => {
        setUserInputs({
            ...inputs,
            searchName: e.target.value
        });
    };

    const updateFilterTypes = checked => {
        setUserInputs({
            ...inputs,
            filterTypes: checked
        })
    };


    return (
        <>
            <Box
                m='3'
                p='6'
                minWidth='lg'
                maxWidth='lg'
                borderColor='teal'
                borderWidth='1px'
                borderRadius='lg'
            >

                <Heading
                    size='xs'
                    textTransform='uppercase'
                >
                    Pokemon Name:
                </Heading>
                <br />
                <Input
                    mb='5'
                    size='md'
                    maxWidth='md'
                    onChange={updateSearchName}
                    placeholder="Type the pokemon name..."

                />

                <br />
                <Heading
                    size='xs'
                    textTransform='uppercase'
                    mt='3'>
                    Pokemon Type (check all that apply):
                </Heading>
                <br />
                <CheckboxGroup
                    colorScheme='teal'
                    onChange={updateFilterTypes}
                >
                    <Stack spacing={3} direction='row' my={3}>
                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Normal'>Normal</Checkbox>
                            <Checkbox value='Fighting'>Fighting</Checkbox>
                            <Checkbox value='Flying'>Flying</Checkbox>
                            <Checkbox value='Dragon'>Dragon</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Poison'>Poison</Checkbox>
                            <Checkbox value='Ground'>Ground</Checkbox>
                            <Checkbox value='Rock'>Rock</Checkbox>
                            <Checkbox value='Dark'>Dark</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Bug'>Bug</Checkbox>
                            <Checkbox value='Ghost'>Ghost</Checkbox>
                            <Checkbox value='Steel'>Steel</Checkbox>
                            <Checkbox value='Fairy'>Fairy</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Fire'>Fire</Checkbox>
                            <Checkbox value='Water'>Water</Checkbox>
                            <Checkbox value='Grass'>Grass</Checkbox>
                        </Stack>

                        <Stack spacing={3} direction='column'>
                            <Checkbox value='Electric'>Electric</Checkbox>
                            <Checkbox value='Psychic'>Psychic</Checkbox>
                            <Checkbox value='Ice'>Ice</Checkbox>
                        </Stack>
                    </Stack>
                </CheckboxGroup>
            </Box >
        </>
    );

}

export default SearchBox;