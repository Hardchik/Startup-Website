import React from 'react';
import { } from '@chakra-ui/react';
import Homepgnew from './../components/Homepg';
import Servies from '../components/Servies';
import Users from '../components/Home Components/Users'
import Descriptive from '../components/Home Components/Descriptive'

const Home = () => {
    return (
        <>
            <Homepgnew />
            <Users />
            <Servies/>
            <Descriptive />
        </>
    );
}

export default Home;