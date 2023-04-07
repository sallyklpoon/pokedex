import React from 'react';
import {
    Center,
    Image,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    Divider,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';
import uuid from 'react-uuid';
import logRequest from '../../helpers/logging';
import axios from 'axios';

const PokemonItem = ({ poke }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const accessPokemon = async() => {
        onOpen();
        axios.get(`http://localhost:6001/pokemon/${poke['id']}`).then(
            res => {
                logRequest(`/pokemon/${poke['id']}`, res.status);
            }
        ).catch( err => {
            logRequest(`/pokemon/${poke['id']}`, err.response.status);
        });
    }

    const pokeImageSrc = id => {
        const pokeSrcNum = id.toString().padStart(3, '0');
        const srcLink = `https://github.com/fanzeyi/pokemon.json/raw/master/images/${pokeSrcNum}.png`;
        return srcLink;
    }

    return (
        <>
            <div key={poke.id} className='poke-item center-flex-col'>
                <Image
                    p='2'
                    boxSize='14rem'
                    alt={pokeImageSrc(poke.id)}
                    src={pokeImageSrc(poke.id)}
                    onClick={accessPokemon}
                    _hover={{
                        cursor: 'pointer',
                        backgroundColor: '#d5e3eb',
                        borderRadius: '2.5rem',
                        transform: 'scale(1.1)'
                    }}
                >
                </Image>
                <Center>
                    <Text fontSize='lg' mt='1' mb='3'>{poke.name.english}</Text>
                </Center>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} isCentered='true'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color='teal'>{poke.name.english}</ModalHeader>
                    <Divider/>
                    <ModalCloseButton />
                    <ModalBody mb='6'>
                        <Center>
                            <Image
                                p='2'
                                boxSize='14rem'
                                alt={pokeImageSrc(poke.id)}
                                src={pokeImageSrc(poke.id)}
                            >

                            </Image>
                        </Center>
                        <Divider my='4'/>
                        <Text as='b'>ID:</Text> {poke.id}
                        <br />
                        <Text as='b'>Type:</Text>
                        <UnorderedList ml='10'>
                            {
                                poke.type.map(type => {
                                    return (
                                        <ListItem key={uuid()}>{type}</ListItem>
                                    )
                                })
                            }
                        </UnorderedList>

                        <Text as='b'>Name</Text>
                        <UnorderedList ml='10'>
                            <ListItem><Text as='b'>English: </Text> {poke.name.english}</ListItem>
                            <ListItem><Text as='b'>Japanese: </Text>{poke.name.japanese}</ListItem>
                            <ListItem><Text as='b'>Chinese: </Text> {poke.name.chinese}</ListItem>
                            <ListItem><Text as='b'>French: </Text>  {poke.name.french}</ListItem>

                        </UnorderedList>
                        <Text as='b'>Base</Text>
                        <UnorderedList ml='10'>
                            <ListItem><Text as='b'>HP: </Text>           {poke.base.HP}</ListItem>
                            <ListItem><Text as='b'>Attack: </Text>       {poke.base.Attack}</ListItem>
                            <ListItem><Text as='b'>Defense: </Text>      {poke.base.Defense}</ListItem>
                            <ListItem><Text as='b'>Attack Speed: </Text> {poke.base['Sp. Defense']}</ListItem>
                            <ListItem><Text as='b'>Defence Speed: </Text>{poke.base['Sp. Defense']}</ListItem>
                            <ListItem><Text as='b'>Speed: </Text>        {poke.base.Speed}</ListItem>
                        </UnorderedList>


                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default PokemonItem;