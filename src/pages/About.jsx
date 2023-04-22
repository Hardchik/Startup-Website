import React from 'react';
import {} from '@chakra-ui/react';
import Servies from '../components/Servies';
// import Aboutus from '../components/About';

import HeroImage from '../components/Heroimg'
import Ab from '../components/About/About'
import Addon from './../components/Addon';
import Team from '../components/Team/Teams'

const About = () => {
    return(
    <>
    <HeroImage heading='ABOUT.' 
    // text='Choose your trip.' 
    />
    <Ab/>
    <Addon/> 
    {/* <Aboutus/> */}
    <Servies/>  
    <Team/>  
    </>
    );
}

export default About;