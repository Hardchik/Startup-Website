import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

import HeroImage from '../components/Heroimg'
import Dotline from '../components/Dotline';
import Part1 from './../components/Contactus/Part1'

export default function contact() {
  return (
    <>
  
  <HeroImage heading='CONTACT.' 
  // text='Choose your trip.'
   />

   <Part1/>

    </>
  );
}