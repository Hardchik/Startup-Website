import React, {useState, useEffect} from 'react';
import {Stack, Text, Button, Avatar, Wrap, Link, Divider, HStack, FormLabel, Input} from '@chakra-ui/react';

const SignUp = () => {
    const [step, setStep] = useState(0);
    const [cardSelect, setCardSelect] = useState(0);
    const [role, setRole] = useState('');

    const SelectHandler = (value) => {
        setCardSelect(value);
    }

    const ContinueHandler = () => {
        setStep(step+1);
    }

    useEffect(() => {
        if(cardSelect === 1) {setRole('Doctor')}
        if(cardSelect === 2) {setRole('Patient')}
    }, [cardSelect])

    return(<>
        {step===0?(<>
            <Stack h={'100vh'} bgColor={'#F3F4F8'}>
                <Stack gap={7} paddingTop={'200px'} justify={'space-between'} align={'center'}>
                    <Text fontSize={'150%'} fontWeight={700}>Select a Role</Text>
                    <Wrap align={'center'} spacing={3}>
                        <Stack
                            rounded={'lg'}
                            p={5} 
                            w={cardSelect===1?'280px':'250px'} 
                            h={cardSelect===1?'220px':'200px'}
                            onClick={() => SelectHandler(1)}
                            bgColor={cardSelect===1?'#9AD7F3':'white'} 
                            align={'center'}>
                            <Avatar size={'xl'}></Avatar>
                            <Text color={cardSelect===1?'white':'gray.400'}>DOCTOR</Text>
                            <Text color={cardSelect===1?'white':'gray.400'}>Lorem Ipsum</Text>
                        </Stack>
                        <Stack 
                            rounded={'lg'}
                            p={5} 
                            w={cardSelect===2?'280px':'250px'} 
                            h={cardSelect===2?'220px':'200px'}
                            onClick={() => SelectHandler(2)}
                            bgColor={cardSelect===2?'#9AD7F3':'white'} 
                            align={'center'}>
                            <Avatar size={'xl'}></Avatar>
                            <Text color={cardSelect===2?'white':'gray.400'}>PATIENT</Text>
                            <Text color={cardSelect===2?'white':'gray.400'}>Lorem Ipsum</Text>
                        </Stack>
                    </Wrap>
                    <Button bgColor={'#9AD7F3'} color={'white'} px={10} alignSelf={'center'} onClick={ContinueHandler}>CONTINUE</Button>
                    <Text textAlign={'center'}>Already have an account? <Link href={'/signin'} _hover={{textDecoration:'none'}} color={'#9AD7F3'}>LogIn</Link></Text>
                </Stack>
        </Stack>
        </>):(<>
            <Stack h={'94vh'} direction>
            <Stack w={'30%'} bgColor={'#9AD7F3'}></Stack>
            <Stack w={'70%'} bgColor={'#F3F4F8'} justify={'space-around'} alignItems={'center'}>
                <Stack w={'30%'} gap={1}>
                    <Text textAlign={'center'} fontSize={'150%'} fontWeight={700}>SignUp</Text>
                    <Stack w={'100%'}>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Name' />
                    </Stack>
                    <Stack w={'100%'}>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Address' />
                    </Stack>
                    <Stack w={'100%'}>
                        <FormLabel>Mobile</FormLabel>
                        <Input placeholder='Phone No.' />
                    </Stack>
                    <Stack w={'100%'}>
                        <FormLabel>E-mail</FormLabel>
                        <Input placeholder='Email' />
                    </Stack>
                    <Stack w={'100%'}>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Password' />
                    </Stack>
                    <Stack w={'100%'}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input placeholder='Confirm Password' />
                    </Stack>
                    {/* <Link href={'/password'} _hover={{textDecoration:'none'}}>
                        <Text color={'#9AD7F3'} textAlign={'right'}>Forgot Password?</Text>
                    </Link> */}
                    <Button bgColor={'#9AD7F3'} color={'white'}>SIGNUP</Button>
                    <Stack gap={2} direction align={'center'}><Divider/><Text fontSize={'80%'} fontWeight={100}>OR</Text><Divider/></Stack>
                    <Stack align={'center'} g ap={3}><HStack><Button bgColor={'#9AD7F3'} color={'white'}>FaceBook</Button><Button bgColor={'#9AD7F3'} color={'white'}>Google</Button></HStack></Stack>
                    <Stack><Text textAlign={'center'}>Already have an account? <Link href={'/signin'} _hover={{textDecoration:'none'}} color={'#9AD7F3'}>LogIn</Link></Text></Stack>
                </Stack>
            </Stack>
        </Stack>
        </>)}
    </>);
}

export default SignUp;