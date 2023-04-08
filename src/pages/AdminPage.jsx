import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Text,
    Heading
} from '@chakra-ui/react';
import axios from 'axios';
import Navbar from '../components/layout/Navbar';
import UniqueUsersReport from '../components/admin/UniqueUsersReport';
import TopUsersOverallReport from '../components/admin/TopUsersOverallReport';
import TopEndpointUsersReport from '../components/admin/TopEndpointUsersReport';
import Endpoints4xxReport from '../components/admin/Endpoints4xxReport';

const AdminPage = () => {
    const [uniqueUsers, setUniqueUsers] = useState([]);
    const [topUsersOverall, setTopUsersOverall] = useState([]);
    const [topEndpointUsers, setTopEndpointUsers] = useState([]);
    const [endpoint4XXErrors, setEndpoint4XXErrors] = useState([]);

    const fetchUniqueUsers = async () => {
        let res = await axios.get('http://localhost:6001/adminReports/uniqueUsers', {
            headers: {
                'auth-token-access': localStorage.getItem('access_token')
            }
        });
        setUniqueUsers(res.data);
    };

    const fetchTopUsersOverall = async () => {
        let res = await axios.get('http://localhost:6001/adminReports/topUsers', {
            headers: {
                'auth-token-access': localStorage.getItem('access_token')
            }
        });
        setTopUsersOverall(res.data);
    }

    const fetchTopEndpointUsers = async () => {
        let res = await axios.get('http://localhost:6001/adminReports/endpointTop', {
            headers: {
                'auth-token-access': localStorage.getItem('access_token')
            }
        });
        setTopEndpointUsers(res.data);
    }

    const fetchEndpoint4xxLogs = async () => {
        let res = await axios.get('http://localhost:6001/adminReports/endpoint4xxErrors', {
            headers: {
                'auth-token-access': localStorage.getItem('access_token')
            }
        });
        setEndpoint4XXErrors(res.data);
    }

    useEffect(() => {
      fetchUniqueUsers();
      fetchTopUsersOverall();
      fetchTopEndpointUsers();
      fetchEndpoint4xxLogs();
    }, [])

    return (
        <>
            <Navbar />

            <Flex direction='column' m='5' alignItems='center'>
                <Text fontSize='3xl'>Reports</Text>

                <Accordion w='70%'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <b>Unique Users</b> over the last 24 hours
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <UniqueUsersReport uniqueUsers={uniqueUsers}/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <b>Top Users</b> over the last 24 hours
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <TopUsersOverallReport userData={topUsersOverall}/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <b>4XX Errors by endpoint</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <TopEndpointUsersReport logs={topEndpointUsers}/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                   <b>4xx Errors by Endpoint</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Endpoints4xxReport logs={endpoint4XXErrors}/>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                   <b>Recent 4xx and 5xx errors</b>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </>
    );
};

export default AdminPage;
