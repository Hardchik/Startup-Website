import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
// import Loginimg from '../Assets/Loginimg'
import Loginimg from './../Assets/loginimg.png'


import {Stack, Text,Image, Input, FormLabel, Link, Button, Divider, HStack} from '@chakra-ui/react'

const Login = () => {
    const location = useLocation();
    const [passRoute, setPassRoute] = useState(false);

    useEffect(() => {
        if(location.pathname === '/password') {
            setPassRoute(true);
        }
    },[location.pathname]);

    return(<>
        <Stack display={passRoute?'none':'flex'} h={'100vh'} direction>
            <Stack w={'30%'} bgColor={'#9AD7F3'}>
                <Image w="100%" h="100%" src={Loginimg} alt="" />
            </Stack>
            <Stack w={'70%'} bgColor={'#F3F4F8'} justify={'space-around'} alignItems={'center'}>
                <Stack w={'30%'} gap={3}>
                    <Text textAlign={'center'} fontSize={'150%'} fontWeight={700}>LOGIN</Text>
                    <Stack w={'100%'}>
                        <FormLabel>E-mail</FormLabel>
                        <Input placeholder='Email' />
                    </Stack>
                    <Stack w={'100%'}>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Password' />
                    </Stack>
                    <Link href={'/password'} _hover={{textDecoration:'none'}}>
                        <Text color={'#9AD7F3'} textAlign={'right'}>Forgot Password?</Text>
                    </Link>
                    <Button bgColor={'#9AD7F3'} color={'white'}>LOGIN</Button>
                    <Stack gap={2} direction align={'center'}><Divider/><Text fontSize={'80%'} fontWeight={100}>OR</Text><Divider/></Stack>
                    <Stack align={'center'} g ap={3}><HStack><Button bgColor={'#9AD7F3'} color={'white'}>FaceBook</Button><Button bgColor={'#9AD7F3'} color={'white'}>Google</Button></HStack></Stack>
                    <Stack><Text textAlign={'center'}>Don't have an account? <Link href={'/signup'} _hover={{textDecoration:'none'}} color={'#9AD7F3'}>Sign Up</Link></Text></Stack>
                </Stack>
            </Stack>
        </Stack>

        <Stack w={'100%'} bgColor={'#F3F4F8'} h={'94vh'} display={passRoute?'block':'none'}>
            <Stack paddingTop={'200px'} justify={'space-around'} alignItems={'center'}>
                <Stack bgColor={'white'} gap={3} p={10} rounded={'lg'} shadow={'lg'}>
                    <Text textAlign={'center'} fontSize={'150%'} fontWeight={700}>Forgot Password</Text>
                    <FormLabel>Enter your account email we'll send you the recovery link</FormLabel>
                    <Input placeholder='Email' />
                    <Button bgColor={'#9AD7F3'} color={'white'} px={10} alignSelf={'center'}>SEND</Button>
                    <Text textAlign={'center'}>Already have an account? <Link href={'/signin'} _hover={{textDecoration:'none'}} color={'#9AD7F3'}>LogIn</Link></Text>
                </Stack>
            </Stack>
        </Stack>
    </>)
}

export default Login;