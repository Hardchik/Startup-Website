import React from 'react';
import { } from '@chakra-ui/react';
// import Homepgnew from './../components/Homepg';
import Servies from '../components/Servies';
import Users from '../components/Home Components/Users'
import Descriptive from '../components/Home Components/Descriptive'
import Hometry from './../components/Hometry';
import Addon from './../components/Addon';
import Addon2 from './../components/Addon2';

const Home = () => {
    return (
        <>
        <Hometry/>
            {/* <Homepgnew /> */}
            <Addon2/> 
            <Users />
            <Descriptive />   
            <Servies/>
            <Addon/> 

        </>
    );
}

export default Home;