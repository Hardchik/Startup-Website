import React from 'react';
import {} from '@chakra-ui/react';
import Servies from '../components/Servies';
// import Aboutus from '../components/About';

import HeroImage from '../components/Heroimg'
import Ab from '../components/About/About'

const About = () => {
    return(
    <>
    <HeroImage heading='ABOUT.' text='Choose your trip.' />
    <Ab/>
    {/* <Aboutus/> */}
    <Servies/>    
    </>
    );
}

export default About;