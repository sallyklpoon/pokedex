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


const RecentErrorsReport = ({ logs }) => {
    return (

            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Recent 4XX and 5XX errors over the past 24 hours</TableCaption>
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
                                    <Tr>
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

export default RecentErrorsReport;