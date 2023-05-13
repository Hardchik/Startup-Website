import React from 'react';
import { } from '@chakra-ui/react';
import Servies from '../components/Servies';
import Users from '../components/Home Components/Users'
import Descriptive from '../components/Home Components/Descriptive'
import Hometry from './../components/Hometry';
import Addon from './../components/Addon';
import Addon2 from './../components/Addon2';
import Newhome from './../components/Home Components/Newhome';
import Faq from '../components/Home Components/Faq'

const Home = () => {
    return (
        <>

        <Newhome/>
        {/* <Hometry/> */}
            {/* <Addon2/>  */}
            <Users />
            {/* <Descriptive />    */}
            {/* <Servies/> */}
            <Faq/>
            <Addon/> 

        </>
    );
}

export default Home;