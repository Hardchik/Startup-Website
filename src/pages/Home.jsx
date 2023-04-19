import React from 'react';
import { } from '@chakra-ui/react';
import Homepgnew from './../components/Homepg';
import Servies from '../components/Servies';
import Users from '../components/Home Components/Users'
import Descriptive from '../components/Home Components/Descriptive'
import Hometry from './../components/Hometry';

const Home = () => {
    return (
        <>
        <Hometry/>
            {/* <Homepgnew /> */}
            <Users />
            <Servies/>
            <Descriptive />    
        </>
    );
}

export default Home;