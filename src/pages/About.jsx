import React from 'react';
import {} from '@chakra-ui/react';
import Servies from '../components/Servies';
// import Aboutus from '../components/About';

import HeroImage from '../components/Heroimg'
import Ab from '../components/About/About'
import Addon from './../components/Addon';

const About = () => {
    return(
    <>
    <HeroImage heading='ABOUT.' text='Choose your trip.' />
    <Ab/>
    <Addon/> 
    {/* <Aboutus/> */}
    <Servies/>    
    </>
    );
}

export default About;