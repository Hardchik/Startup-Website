import React, { useEffect, useState } from 'react';
import {Divider, Image, Input, Stack, Text, useMediaQuery, ModalBody, Modal, ModalFooter, ModalCloseButton, ModalHeader, ModalOverlay, ModalContent, Link, InputGroup, InputRightElement, Button, useDisclosure, VStack, Badge } from '@chakra-ui/react';
import {HiOutlinePencil} from 'react-icons/hi';
import {AiOutlineMenu, AiOutlineCreditCard} from 'react-icons/ai';
import {BiEdit, BiLogIn} from 'react-icons/bi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FaDiscord} from 'react-icons/fa';
import {MdOutlineSchool} from 'react-icons/md';
import {BsSend} from 'react-icons/bs';
import {TfiReload} from 'react-icons/tfi';
import RichTextExample from '../components/TextEditor/RichText.tsx';
import logo from '../Assets/Dlogo3.png'

const Dashboard = () => {
    const [media] = useMediaQuery('(max-width: 767px)')
    const [menu, setMenu] = useState(false);
    const [menuOption, setMenuOption] = useState('document');
    const [document, setDocument] = useState([]);
    const [brainstorm, setBrainstorm] = useState([]);
    const [brainstormValue, setBrainstormValue] = useState('');
    const [documentValue, setDocumentValue] = useState('');
    const [edit, setEdit] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: isUpgradeOpen, onOpen: onUpgradeOpen, onClose: onUpgradeClose} = useDisclosure();
    const [text, setText] = useState("")

    useEffect(() => {

    })

    useEffect(() => {

    }, [document, documentValue, brainstorm])

    const SubmitHandler = (e) => {
        const doc = document;
        setDocument(doc.concat({id: Math.random()*1000, value: documentValue}))
    }
    const Submit1Handler = (e) => {
        const brain = brainstorm;
        setBrainstorm(brain.concat({id: Math.random()*1000, value: brainstormValue}))
    }

    const Tab = ({text, id}) => {
        const [inputTitle, setInputTitle] = useState('');

        // useEffect(()=>{
        //     console.log(document);
        //     console.log(brainstorm);
        // }, [document, brainstorm])

        const DeleteHandler = () => {
            // console.log(menuOption)
            // console.log(document)
            setDocument(document.filter((doc) => doc.id!=menuOption))
            setBrainstorm(brainstorm.filter((brain) => brain.id!=menuOption))
        }

        const EditHandler = () => {
            setEdit(!edit); 
            setInputTitle(text) 
            if(inputTitle!=='') {
                if(document.find((doc)=>doc.id == menuOption)!= undefined) {
                    const dd1 = document.filter((doc) => doc.id == menuOption)
                    const idx = document.findIndex((doc) => doc.id == menuOption)
                    dd1[0].value = inputTitle;
                    let doc = document;
                    console.log(idx);
                    doc[idx] = dd1[0]
                }

                if(brainstorm.find((doc)=>doc.id == menuOption)!= undefined) {
                    const dd2 = brainstorm.filter((doc) => doc.id == menuOption)
                    const idd = brainstorm.findIndex((doc) => doc.id == menuOption)
                    dd2[0].value = inputTitle;
                    let brain = brainstorm;
                    console.log(idd);
                    brain[idd] = dd2[0]
                }
            }
        }


        return(<>
            <Stack justify={'space-between'} w={'100%'} _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'md'} p={1} bgColor={menuOption===`${id}`?'pink':'none'} onClick={() => {setMenuOption(`${id}`);}} direction align={'center'}>
                <Stack align={'center'} gap={1} direction>
                    <HiOutlinePencil size={'20px'} />
                    {menuOption===`${id}` && edit===true?(<Input 
                    size = {'xs'}
                    value={inputTitle==='' && text===''?'New document' : inputTitle===''? text:inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    />):(<Text fontSize={'80%'} noOfLines={1}>{text}</Text>)}
                </Stack>
                {menuOption===`${id}`?(<Stack direction gap={1}>
                    <BiEdit onClick={EditHandler} />
                    <RiDeleteBin6Line onClick={() => {onOpen();}} />
                </Stack>):(<></>)}
            </Stack>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Delete document</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Are you sure you want to delete this document?</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => {onClose();}}>Cancel</Button>
                    <Button colorScheme='red' onClick={() => {onClose(); DeleteHandler();}}>Delete</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>);
    }

    return(<Stack direction={{base:'column', md:'row'}} w={'100%'}>
        <Stack zIndex={999} p={3} bgColor={'#FFFF'} borderRight={{base:'none', md:'1px solid black'}} position={{base:'fixed', md:'none'}} direction={{base:'row', md:'column'}} h={{base:'7vh', md:'100vh'}} w={{base:'100%', md:'20%'}} justify={{base:'space-between', md:'none'}}>
            <Stack>
                <Link to='/dashboard'><Image w='200px' src={logo} /></Link>
                <Stack w={'100%'}>
                    <Divider display={{base:'none', md:'flex'}} />
                </Stack>
                <Stack display={{base:'none', md:'block'}}>
                    <Stack justify={'space-between'} w={'100%'}  _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={1} bgColor={menuOption==='document'?'pink':'none'} onClick={() => setMenuOption('document')} direction align={'center'} gap={1}>
                        <Stack align={'center'} gap={1} direction>
                            <HiOutlinePencil />
                            <Text noOfLines={1}>New document</Text>
                        </Stack>
                    </Stack>
                    <Stack justify={'space-between'} w={'100%'} _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={1} bgColor={menuOption==='brainstorm'?'pink':'none'} onClick={() => setMenuOption('brainstorm')} direction align={'center'} gap={1}>
                        <Stack align={'center'} gap={1} direction>
                            <HiOutlinePencil />
                            <Text noOfLines={1}>New brainstorm</Text>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Text fontSize={'110%'} fontWeight={500}>Documents</Text>
                    </Stack>
                    
                    {document.map((doc) => {
                        return(<Tab id={doc.id} text={doc.value}/>)
                    })}

                    <Stack>
                        <Text fontSize={'110%'} fontWeight={500}>Brainstorms</Text>
                    </Stack>
                    {brainstorm.map((doc) => {
                        return(<Tab id={doc.id} text={doc.value}/>)
                    })}

                </Stack>
            </Stack>
            <Stack display={{base:'block', md:'none'}}>
                    <AiOutlineMenu onClick={() => setMenu(!menu)} />
            </Stack>

            <Stack display={{base:'none', md:'block'}} borderTop={'1px solid black'}>
                    <Stack onClick={onUpgradeOpen} _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2}  direction align={'center'} gap={2}>
                        <AiOutlineCreditCard />
                        <Text>Upgrade</Text>
                    </Stack>
                    <Link _hover={{textDecoration:'none'}} isExternal href='https://discord.com/invite/ft8pDPQtSM'>
                        <Stack  _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2} direction align={'center'} gap={2}>
                            <FaDiscord />
                            <Text>Discord</Text>
                        </Stack>
                    </Link>
                    <Link _hover={{textDecoration:'none'}} isExternal href='https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQfRWdF7x3ZWSxmdwi_Ukt10VLZBYpxLSJzYMw_tlzHrK-Njz3GPQulOBlXqT0haD2TJHPk1-0jPYPZ/pubhtml'>
                        <Stack  _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2} direction align={'center'} gap={2}>
                            <MdOutlineSchool />
                            <Text>Resources</Text>
                        </Stack>
                    </Link>
                    <Stack _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2} direction align={'center'} gap={2}>
                        <BiLogIn />
                        <Text>Logout</Text>
                    </Stack>
            </Stack>
        </Stack>

        {menu && media?(<>
            <Stack p={5} shadow={'lg'} bgColor={'#FFF'} justify={'space-between'} h={'95%'} top={'5vh'} position={'fixed'} w={'70%'} zIndex={999}>
                <Stack>
                    <Stack>
                        <Stack justify={'space-between'} w={'100%'}  _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={1} bgColor={menuOption==='document'?'pink':'none'} onClick={() => setMenuOption('document')} direction align={'center'} gap={1}>
                            <Stack align={'center'} gap={1} direction>
                                <HiOutlinePencil />
                                <Text noOfLines={1}>New document</Text>
                            </Stack>
                        </Stack>
                        <Stack justify={'space-between'} w={'100%'} _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={1} bgColor={menuOption==='brainstorm'?'pink':'none'} onClick={() => setMenuOption('brainstorm')} direction align={'center'} gap={1}>
                            <Stack align={'center'} gap={1} direction>
                                <HiOutlinePencil />
                                <Text noOfLines={1}>New brainstorm</Text>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Text fontSize={'110%'} fontWeight={500}>Documents</Text>
                        </Stack>
                        
                        {document.map((doc) => {
                            return(<Tab id={doc.id} text={doc.value}/>)
                        })}

                        <Stack>
                            <Text fontSize={'110%'} fontWeight={500}>Brainstorms</Text>
                        </Stack>
                        {brainstorm.map((doc) => {
                            return(<Tab id={doc.id} text={doc.value}/>)
                        })} 

                    </Stack>
                </Stack>

                <Stack borderTop={'1px solid black'}>
                        <Stack onClick={onUpgradeOpen} _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2}  direction align={'center'} gap={2}>
                            <AiOutlineCreditCard />
                            <Text>Upgrade</Text>
                        </Stack>
                        <Link _hover={{textDecoration:'none'}} isExternal href='https://discord.com/invite/ft8pDPQtSM'>
                            <Stack  _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2} direction align={'center'} gap={2}>
                                <FaDiscord />
                                <Text>Discord</Text>
                            </Stack>
                        </Link>
                        <Link _hover={{textDecoration:'none'}} isExternal href='https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQfRWdF7x3ZWSxmdwi_Ukt10VLZBYpxLSJzYMw_tlzHrK-Njz3GPQulOBlXqT0haD2TJHPk1-0jPYPZ/pubhtml'>
                            <Stack _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2} direction align={'center'} gap={2}>
                                <MdOutlineSchool />
                                <Text>Resources</Text>
                            </Stack>
                        </Link>
                        <Stack _hover={{bgColor:'pink.100'}} cursor={'pointer'} rounded={'lg'} p={2} direction align={'center'} gap={2}>
                            <BiLogIn />
                            <Text>Logout</Text>
                        </Stack>
                </Stack>
            </Stack>
        </>):(<></>)}


        <Stack position={'relative'} left={{base:0,md:'19%'}} top={{base:'5vh', md:0}} h={'100vh'} w={{base:'100%', md:'80%'}} bgColor={'#F3F4F6'}>
            {menuOption === 'document'?(<>
                <Stack bgColor={'white'} justify={'center'} align={'center'} w={'100%'} h={'100%'}>
                    <Text w={'50%'} textAlign={'center'} fontSize={'180%'} fontWeight={700}>Hey HARDIK, what are you writing about today?</Text>
                    <InputGroup variant={'filled'} w={'50%'} shadow={'xl'}>
                        <Input border={'none'} value={documentValue} onChange={(e) => setDocumentValue(e.target.value)} bgColor={'white'} placeholder='A short description of your essay' />
                        <InputRightElement roundedRight={'lg'} bgColor={'pink'} value={documentValue} color={'white'} cursor={'pointer'} onClick={(e) => SubmitHandler(e)}><BsSend /></InputRightElement>
                    </InputGroup>
                    <Stack w={'45%'} paddingTop={10}>
                        <Text color={'#777777'} fontWeight={500}>Not sure? Here's some suggestions.</Text>
                        <Divider />
                        <Text onClick={() => setDocumentValue('The significance of the Mona Lisa in art history')} fontSize={'110%'} cursor={'pointer'} _hover={{fontStyle:'italic'}}>The significance of the Mona Lisa in art history</Text>
                        <Divider />
                        <Text onClick={() => setDocumentValue('The mathematical concepts behind cryptography')} fontSize={'110%'} cursor={'pointer'} _hover={{fontStyle:'italic'}}>The mathematical concepts behind cryptography</Text>
                        <Divider />
                        <Text onClick={() => setDocumentValue('The philosophy of science: theories and methodologies')} fontSize={'110%'} cursor={'pointer'} _hover={{fontStyle:'italic'}}>The philosophy of science: theories and methodologies</Text>
                    </Stack>
                </Stack>
            </>):(<>
                {menuOption === 'brainstorm'?(<>
                    <Stack bgColor={'white'} justify={'center'} align={'center'} w={'100%'} h={'100%'}>
                        <Text w={'50%'} textAlign={'center'} fontSize={'180%'} fontWeight={700}>Hey HARDIK, what do you want to brainstorm today?</Text>
                        <InputGroup w={'60%'} shadow={'lg'}>
                            <Input value={brainstormValue} onChange={(e) => setBrainstormValue(e.target.value)} bgColor={'white'} placeholder="A short description of what you're brainstorming" />
                            <InputRightElement bgColor={'pink'} value={brainstormValue} color={'white'} cursor={'pointer'} onClick={(e) => Submit1Handler(e)}><BsSend /></InputRightElement>
                        </InputGroup>                        
                        <Stack w={'45%'} paddingTop={10}>
                            <Text color={'#777777'} fontWeight={500}>Not sure? Here's some suggestions.</Text>
                            <Divider />
                            <Text onClick={() => setBrainstormValue('The significance of the Mona Lisa in art history')} fontSize={'110%'} cursor={'pointer'} _hover={{fontStyle:'italic'}}>The significance of the Mona Lisa in art history</Text>
                            <Divider />
                            <Text onClick={() => setBrainstormValue('The mathematical concepts behind cryptography')} fontSize={'110%'} cursor={'pointer'} _hover={{fontStyle:'italic'}}>The mathematical concepts behind cryptography</Text>
                            <Divider />
                            <Text onClick={() => setBrainstormValue('The philosophy of science: theories and methodologies')} fontSize={'110%'} cursor={'pointer'} _hover={{fontStyle:'italic'}}>The philosophy of science: theories and methodologies</Text>
                        </Stack>
                    </Stack>
                </>):(<>
                    <Stack direction w={'100%'}>
                        <Stack p={5} w={{base: '100%', md:'65%'}}>
                            <RichTextExample
                            />
                        </Stack>
                        <Stack align={'center'} gap={5} display={{base:'none', md:'flex'}} w={'35%'} justify={'center'} h={'100vh'} >
                            <VStack w={'70%'} rounded={'lg'} bgColor={'white'}>
                                <Stack align={'center'} w={'100%'} direction justify={'space-between'}>
                                    <Text p={2} fontSize={'95%'} fontWeight={700}>Commands</Text>
                                    <Badge marginRight={3} colorScheme='green'>NEW</Badge>
                                </Stack>
                                <Stack w={'100%'} borderTop={'1px solid black'}>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Generate a title</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Generate content</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Transform Text</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Change tone</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Show don't tell</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Write a sentence</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Write a paragraph</Text>
                                </Stack>
                            </VStack>
                            <VStack w={'70%'} rounded={'lg'} bgColor={'white'}>
                                <Stack align={'center'} w={'100%'} direction justify={'space-between'}>
                                    <Text px={2} fontSize={'95%'} fontWeight={700}>What to write next</Text>
                                    <Text p={2} rounded={'md'} _hover={{bgColor:'#888888'}}><TfiReload cursor={'pointer'} size={'15px'} /></Text>
                                </Stack>
                                <Stack w={'100%'} borderTop={'1px solid black'}>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Extension request for homework assignment</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Explaining unexpected obstacles</Text>
                                    <Text cursor={'pointer'} px={3} py={1} rounded={'md'} _hover={{bgColor:'pink.100'}}>Checking possibility and addressing concerns</Text>
                                </Stack>
                            </VStack>
                        </Stack>
                    </Stack>
                </>)}
            </>)}
        </Stack>

        <Modal size={'4xl'} isCentered isOpen={isUpgradeOpen} onClose={onUpgradeClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader fontWeight={700} fontSize={'150%'}>Go unlimited, HARDIK.</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack justify={'space-evenly'} align={'center'} direction={{base:'column', md:'row'}}>
                        <Stack p={7} rounded={'lg'} bgColor={'pink'} border={'1px solid pink'}>
                            <Text color={'#888888'} fontWeight={700} textAlign={'start'}>FREE</Text>
                        </Stack>
                        <Stack p={7} border={'1px solid pink'} rounded={'lg'}>
                            <Text color={'pink'} fontWeight={700} textAlign={'start'}>BASIC</Text>
                        </Stack>
                        <Stack p={7} border={'1px solid pink'} rounded={'lg'}>
                            <Text color={'pink'} fontWeight={700} textAlign={'start'}>PRO</Text>
                        </Stack>
                    </Stack>
                </ModalBody>
                </ModalContent>
        </Modal>
    </Stack>);
}

export default Dashboard;