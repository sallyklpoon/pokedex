import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import uuid from 'react-uuid';


const TopEndpointUsersReport = ({ logs }) => {
    return (

            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Top User by Endpoint, of all time</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Endpoint</Th>
                            <Th>Top User</Th>
                            <Th isNumeric>Requested Count</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            logs.map(log => {
                                return (
                                    <Tr key={uuid()}>
                                        <Td>{log['endpoint']}</Td>
                                        <Td>{log['user']['username']}</Td>
                                        <Td isNumeric>{log['user']['count']}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>

    )
};

export default TopEndpointUsersReport;