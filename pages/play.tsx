import React from "react";
import { chakra, LightMode, InputGroup, InputLeftElement, IconButton, Heading, Input, Flex, Text, Select, Button, useColorMode, Spinner, Textarea, Switch } from "@chakra-ui/react";

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Title() {

    const {toggleColorMode} = useColorMode();

  let preloaderRef = useRef(null);
  let preloaderBarRef = useRef(null);
  let preloaderScreenRef = useRef(null);
  let row1 = useRef(null);
  let row2 = useRef(null);
  let row3 = useRef(null);

  let main = useRef(null);

  useLayoutEffect(() => {

      const ctx = gsap.context(() => {

          gsap.from(preloaderRef.current, {
            duration: 0.8,
              y: 40,
              opacity: 1,
              ease: 'power2.inOut',
              delay: 1,
          })

          gsap.from(preloaderBarRef.current, {
            duration: 1.2,
              width: 0,
              ease: 'power2.inOut',
              delay: 2,
          })

          gsap.to(preloaderScreenRef.current, {
            duration: 2,
              top: '-100%',
              ease: 'power2.inOut',
              delay: 3,
          })

          gsap.from([row1.current, row2.current, row3.current], {
            duration: 0.9,
              y: 50,
              opacity: 0,
              ease: 'power4.inOut',
              delay: 3.5,
              stagger: {
                  amount: 0.3
              }
          })

    }, main);
    return () => ctx.revert();

  }, [])

  return (
    <Flex ref={main} w="100%" h="100vh" m="0" overflow='hidden' background="#000" flexDirection="column">

        <Flex w="100%" h="10vh" background="#000" color="#fff" justifyContent='space-between' alignItems='center' textTransform='uppercase' p="0 2em">
            <Text>Hotburo</Text>
            <Text>13/1/23</Text>
            <Text onClick={toggleColorMode} >Context</Text>
        </Flex>

        <Flex w="100%" h="90vh" background="#ffc822" color="black" borderRadius='1em 1em 0 0' padding="2em" position='relative' justifyContent='center' alignItems='center'>
            <Flex direction='column'>
                <Flex ref={row1} w="100%" justifyContent='space-between' alignItems='center'>
                    <Heading fontSize='10vw' letterSpacing='-4px' fontWeight='medium'>We are building</Heading>
                    <Text>from 2021</Text>
                </Flex>
                <Flex ref={row2} w="100%" justifyContent='space-between' alignItems='center'>
                    <Flex></Flex>
                    <Heading fontSize='10vw' letterSpacing='-4px' fontWeight='medium'>Digital Brands</Heading>
                    <chakra.span>
                    </chakra.span>
                </Flex>
                <Flex ref={row3} w="100%" justifyContent='space-between' alignItems='center'>
                    <Heading fontSize='10vw' letterSpacing='-4px' fontWeight='medium'>Differently</Heading>
                    <chakra.span>
                        SIMPLE WEBSITE SIMPLE BRANDING.
                    </chakra.span>
                </Flex>
            </Flex>
        </Flex>

        <Flex position='absolute' top='10vh' width='40%' height='90vh'>
            <LightMode>
                <iframe
                    src="https://my.spline.design/forhotburocopy-d8d6b1df53fea4cee2c21d09e6d7cb23/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    style={{
                        backgroundColor: 'transparent'
                    }}
                />
            </LightMode>
        </Flex>

        <Flex ref={preloaderScreenRef} position='fixed' top="0" w="100%" h="100vh" background="#000" justifyContent='center' alignItems='center' color="white">
            <Flex flexDirection='column' alignItems="center" fontSize="2vw">
                <Text ref={preloaderRef}>Everyone uses a <chakra.span><i>preloader</i></chakra.span> sorry :/</Text>
                <Flex ref={preloaderBarRef} w="450px" backgroundColor="red" h="2px" mt={5}></Flex>
            </Flex>
        </Flex>

    </Flex>
  )
}
