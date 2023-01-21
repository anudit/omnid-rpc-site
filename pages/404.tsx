import React from "react";
import { chakra, LightMode, InputGroup, InputLeftElement, IconButton, Heading, Input, Flex, Text, Select, Button, useColorMode, Spinner, Textarea, Switch } from "@chakra-ui/react";

import { useLayoutEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { MoonIcon } from "@chakra-ui/icons";

export default function Title() {

    const {colorMode, toggleColorMode} = useColorMode();

    let navRef = useRef<null | HTMLDivElement>(null);
    let main = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {

      const ctx = gsap.context(() => {

          gsap.from(navRef.current, {
            duration: 1.6,
              y: 60,
              opacity: 0,
              ease: Expo.easeInOut,
              delay: 2,
              stagger: 0.2,
          })

          gsap.from(".header > span", {
            duration: 1.5,
              top: "-100vh",
              ease: 'bounce.out',
              delay: 0.5,
              stagger: 0.2,
          })

    }, main);
    return () => ctx.revert();

  }, [])

  return (
    <Flex ref={main} w="100%" h="100vh" m="0" overflow='hidden' flexDirection="column">

        <Flex fontSize="lg" zIndex='100' ref={navRef} w="100%" h="100px" justifyContent='space-between' p="0 40px" lineHeight='100px'>
            <Text fontWeight={600}>Omnid</Text>
            <Flex direction="row" h="100%" alignItems='center'>
                <Text ml='10px'>GitHub</Text>
                <Text ml='10px'>Discord</Text>
                <Text ml='10px' onClick={toggleColorMode} cursor="pointer">
                    {colorMode === 'dark' ? "☀️" : "🌘" }
                </Text>
            </Flex>
        </Flex>

        <Flex position="absolute" w="100%" h="100vh" padding="2em" justifyContent='center' alignItems='center'>
            <Flex direction={{base: 'column', md:'row'}} fontSize={{base: "10em", md:"20em", lg:"40em"}} fontFamily='Maelstorm' className="header">
                <chakra.span position='relative'>4</chakra.span>
                <chakra.span position='relative'>0</chakra.span>
                <chakra.span position='relative'>4</chakra.span>
            </Flex>
        </Flex>

        <Flex position="fixed" w="100%" justifyContent='center' alignItems='center' bottom="5em">
            <Text>Seems you are lost, come back</Text>
            <Flex></Flex>
        </Flex>

    </Flex>
  )
}
