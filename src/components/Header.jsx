import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    VStack,
    Collapse,
    Icon,
    Link,
    Popover,
    HStack,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    // useBreakpointValue,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  import {BiHome} from 'react-icons/bi'
  import {MdDashboard} from 'react-icons/md'
  import {GrContact} from 'react-icons/gr'
  import {HiOutlineNewspaper} from 'react-icons/hi'
  import { useNavigate, useLocation } from "react-router-dom";
  import { useEffect, useState } from 'react';
 
  import Home from './../pages/Home';
  // import About from './../pages/About';
  // import Contact from './../pages/Contact';


  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const [loginRoute, setLoginRoute] = useState(false);
    const [window] = useMediaQuery('(max-width: 780px)');
    const navigate = useNavigate();
    const SignInHandler = () => {
      navigate("/signin");
    }

    const SignUpHandler = () => {
      navigate("/signup");
    }

    const location = useLocation();
    useEffect(()=> {
      if(location.pathname==='/signin' || location.pathname === '/signup' || location.pathname === '/password') {
        setLoginRoute(true)
      }
    }, [location]);


    return (
      <>
      {window?(<>
        
        <Box>
          <Flex
            bg={'#9AD7F3'}
            color={'gray.600'}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            align={'center'}>
            <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
              <Link href={'/home'} _hover={{textDecoration:'none'}}>
                <Text
                  textAlign={{ base: 'left', md: 'left' }}
                  fontFamily={'heading'}
                  color={'gray.800'}>
                  Logo
                </Text>
              </Link>
            </Flex>
            <Stack
              display={loginRoute?'none':'flex'}
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'#'}
                onClick={SignInHandler}>
                Sign In
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                  bg: 'pink.300',
                }}
                onClick={SignUpHandler}>
                Sign Up
              </Button>
            </Stack>
          </Flex>
        </Box>
        

        <Stack display={loginRoute?'none':'flex'} w={'100vw'} p={5} bottom={0} left={0} opacity={0.7} bgColor={'gray.300'} color={'black'} position={'fixed'}>
          <HStack justify={'space-evenly'}>
          <Link _hover={{textDecoration:'none'}} href={'/home'}>
              <VStack alignContent={'center'}>
                <BiHome fontSize={'150%'} />
                <Text fontSize={'70%'}>Home</Text>
              </VStack>
            </Link>
            <Link _hover={{textDecoration:'none'}} href={'/dashboard'}>
              <VStack>
                <MdDashboard fontSize={'150%'} />
                <Text fontSize={'70%'}>Dashboard</Text>
              </VStack>
            </Link>
            <Link _hover={{textDecoration:'none'}} href={'/about'}>
            <VStack>
                <HiOutlineNewspaper fontSize={'150%'}/>
                <Text fontSize={'70%'}>About</Text>
              </VStack>
            </Link>
            <Link _hover={{textDecoration:'none'}} href={'/contact'}> 
              <VStack>
                <GrContact fontSize={'150%'} />
                <Text fontSize={'70%'}>Contact</Text>
              </VStack>
            </Link>
          </HStack>
        </Stack>
      </>):(<>
        <Box>
          <Flex
            bg={'#9AD7F3'}
            color={'gray.600'}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={'gray.200'}
            align={'center'}>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
              <Link href={'/home'} _hover={{textDecoration:'none'}}>
                <Text
                  textAlign={{ base: 'center', md: 'left' }}
                  fontFamily={'heading'}
                  color={'gray.800'}>
                  Logo
                </Text>
              </Link>
              <Flex display={loginRoute?'none':'block'}>
              <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                <DesktopNav />
              </Flex>
              </Flex>
            </Flex>
    
            <Stack
              display={loginRoute?'none':'flex'}
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'#'}
                onClick={SignInHandler}>
                Sign In
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'gray.500'}
                bg={'white'}
                href={'#'}
                _hover={{
                  bg: 'pink.300',
                }}
                onClick={SignUpHandler}>
                Sign Up
              </Button>
            </Stack>
          </Flex>
    
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      </>)}
      </>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      href: 'home',
      // children: [
      //   {
      //     label: 'Explore Design Work',
      //     subLabel: 'Trending Design to inspire you',
      //     href: '#',
      //   },
      //   {
      //     label: 'New & Noteworthy',
      //     subLabel: 'Up-and-coming Designers',
      //     href: '#',
      //   },
      // ],
    },
    {
      label: 'Resources',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'About',
      href: 'About',
    },
  
    {
      label: 'Contact',
      href: 'Contact',
    },
  ];