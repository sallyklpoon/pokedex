import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Center
} from '@chakra-ui/react';
import uuid from 'react-uuid';


const TopUsersOverallReport = ({ userData }) => {
    return (
        <Center>
            <TableContainer>
                <Table variant='simple' maxW='md'>
                    <TableCaption>Top Users visiting the site over the past 24 hours</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Username</Th>
                            <Th isNumeric>Request Counts</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            userData.map(user => {
                                return (
                                    <Tr key={uuid()}>
                                        <Td>{user['_id']}</Td>
                                        <Td isNumeric>{user['count']}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Center>
    )
};

export default TopUsersOverallReport;