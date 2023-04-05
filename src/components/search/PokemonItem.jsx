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
    ModalFooter,
    ModalHeader,
    Button,
    Box,
    Divider
} from '@chakra-ui/react';

const PokemonItem = ({ poke }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                    onClick={onOpen}
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
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody>
                        <p><b>ID:</b> {poke.id}</p>
                        <p><b>Type:</b> {poke.type}</p>
                        <p><b>Name</b>
                            <Box ml='10'>
                                <ul>
                                    <li><b>English: </b> {poke.name.english}</li>
                                    <li><b>Japanese: </b>{poke.name.japanese}</li>
                                    <li><b>Chinese: </b> {poke.name.chinese}</li>
                                    <li><b>French: </b>  {poke.name.french}</li>
                                </ul>
                            </Box>
                        </p>
                        <p><b>Base</b>
                            <Box ml='10'>
                                <ul>
                                    <li><b>HP: </b>           {poke.base.HP}</li>
                                    <li><b>Attack: </b>       {poke.base.Attack}</li>
                                    <li><b>Defense: </b>      {poke.base.Defense}</li>
                                    <li><b>Attack Speed: </b> {poke.base['Sp. Defense']}</li>
                                    <li><b>Defence Speed: </b>{poke.base['Sp. Defense']}</li>
                                    <li><b>Speed: </b>        {poke.base.Speed}</li>
                                </ul>
                            </Box>
                        </p>

                    </ModalBody>
                    <Divider />

                    <ModalFooter>
                        <Button colorScheme='teal' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default PokemonItem;