import React from 'react';
import {
    Text,
    UnorderedList,
    ListItem,
    Avatar
} from '@chakra-ui/react';
import uuid from 'react-uuid';

const UniqueUsersReport = ({ uniqueUsers }) => {

    return (
        <UnorderedList>
            {
                uniqueUsers.map(user => {
                    return (
                        <ListItem key={uuid()} mb='3'>
                            <Avatar name={user} size='xs' mr='3'/>
                            {user}
                        </ListItem>
                    );
                })
            }
            {
                uniqueUsers.length === 0 && <Text>No valid user data at this time.</Text>
            }
        </UnorderedList>
    )
}

export default UniqueUsersReport;