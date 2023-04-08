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
} from '@chakra-ui/react'
import uuid from 'react-uuid';


const Endpoints4xxReport = ({ logs }) => {
    return (

            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Top User by Endpoint, of all time</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Endpoint</Th>
                            <Th>Accessed Time</Th>
                            <Th isNumeric>Error Code</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            logs.map(log => {
                                return (
                                    <Tr key={uuid()}>
                                        <Td>{log['_id']['endpoint']}</Td>
                                        <Td>{log['_id']['accessedAt']}</Td>
                                        <Td isNumeric>{log['_id']['status']}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>

    )
};

export default Endpoints4xxReport;