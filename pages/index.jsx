import React, {useContext, useEffect, useState} from 'react';
import { chakra, InputGroup, InputLeftElement, IconButton, Heading, Input, Flex, Text, Select, Button, useColorMode, Spinner, Textarea, Switch } from "@chakra-ui/react";
import { Box, SunIcon, MoonIcon, ArrowRightIcon, ArrowDownIcon, ChevronRightIcon, ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import { HotKeys } from "react-hotkeys";
import fuzzy from 'fuzzy';
import dynamic from 'next/dynamic'
const ReactJson = dynamic(() => import('react-json-view'), {
  ssr: false,
})
import { CodeIcon, OmnidIcon } from "../components/Icons";

import networks from "../utils/chainData";
import supportedFunctions from '../utils/supportedFunctions';
import { SearchIcon } from '@chakra-ui/icons';
import { EnsCacheContext } from '../contexts/EnsCache';
import { ethers } from 'ethers';
import { getAddress, isAddress } from 'ethers/lib/utils';
import Head from 'next/head';
import Link from 'next/link';


const hexPattern = /0x[0-9A-Fa-f]/g;
const numberPattern = /[0-9]/g;
const hexEncode = (str) => {
  var hex, i;

  var result = "";
  for (i=0; i<str.length; i++) {
      hex = str.charCodeAt(i).toString(16);
      result += ("000"+hex).slice(-4);
  }

  return '0x'+result
}


export default function App() {

  let [ filterValue, setFilterValue ] = useState("");
  let [ selectedChain, setSelectedChain ] = useState('mainnet');
  let [ selectedMethod, setSelectedMethod ] = useState('web3_clientVersion');
  let [ rpcInput, setRpcInput ] = useState({ "id": 42, "jsonrpc": "2.0", "method": 'eth_chainId' });
  let [ rpcOutput, setRpcOutput ] = useState({});
  let [ loading, setLoading ] = useState(false);
  let [ history, setHistory ] = useState([]);
  let { colorMode, toggleColorMode } = useColorMode();
  let { ensToAddress } = useContext(EnsCacheContext);

  async function updateInputs(){

    let input = {
      "id": 42,
      "jsonrpc": "2.0",
      "method": selectedMethod,
    }

    if (Boolean(supportedFunctions[selectedMethod]?.params?.length)){
      input['params'] = [];
      for (let index = 0; index < supportedFunctions[selectedMethod]?.params.length; index++) {
        const param = supportedFunctions[selectedMethod]?.params[index];
        const value = document.getElementById('param_'+param?.name).value;
        if (param.type == 'hex'){
          if (value.match(hexPattern)) input.params.push(value);
          else input.params.push(hexEncode(value));
        }
        else if (param.type == 'boolean'){
          const valueChecked = document.getElementById('param_'+param?.name).checked;

          input.params.push(valueChecked);
        }
        else if (param.type == 'number'){

          if (value.match(numberPattern)) input.params.push('0x' + parseInt(value).toString(16));
          else input.params.push(value);

        }
        else if (param.type == 'functionCall'){

          const ethCallAddress = document.getElementById('param_address').value;
          const ethCallMethod = document.getElementById('param_method').value;
          const ethCallMethodData = document.getElementById('param_method_data').value;

          if (Boolean(ethCallAddress && ethCallMethod) === true){
            let callData = {
              data: ethCallMethod + ethCallMethodData.replace('0x', ''),
              to: ethCallAddress
            }

            input.params.push(callData);
            input.params.push('latest');
          }

        }
        else if (param.type == 'address'){
          if (value.toLowerCase().trim().endsWith('.eth')){
            let resp = await ensToAddress(value.toLowerCase().trim())
            if (resp != false) input.params.push(resp);
            else input.params.push(ethers.constants.AddressZero);
          }
          else if(isAddress(value)) input.params.push(getAddress(value));
          else input.params.push(value);
        }
        else if (param.type == 'blockNumber'){
          if (value.toLowerCase() === 'earliest') input.params.push('earliest');
          else if (value.toLowerCase() === 'latest') input.params.push('latest');
          else if (value.toLowerCase() === 'pending') input.params.push('pending');
          else if (value.match(numberPattern)) input.params.push('0x' + parseInt(value).toString(16));
          else if (value.match(hexPattern)) input.params.push(value);
          else input.params.push(value);
        }
        else{
          input.params.push(value);
        }
      }
    };

    setRpcInput(input)

  }

  async function executeCall(){
    setLoading(true);
    fetch(networks.get(selectedChain).rpc, {
      method: "POST",
      body:JSON.stringify(rpcInput),
      headers: {
        "accept": "*/*",
        "content-type": "application/json",
      }
    }).then(e=>e.json()).then((e)=>{
      setRpcOutput(e);
      setHistory((current)=>{
        let newHist = current.concat([{
          selectedChain: selectedChain,
          time: new Date(),
          method: rpcInput?.method,
          params: Boolean(rpcInput?.params) ? rpcInput?.params: null,
          output: e
        }])
        return newHist;
      })
    }).catch((e)=>{
      console.log('exec error', e);
      setRpcOutput(e.message);
    }).finally(()=>{
      setLoading(false);
    });
  }

  const handlers = {
    EXECUTE: executeCall
  };

  const keyMap = {
    EXECUTE: "ctrl+enter"
  };

  return (
    <HotKeys handlers={handlers} keyMap={keyMap}>
    <Flex direction="column">

      <Head>
        <title>Omnid - RPC Playground</title>
      </Head>

      <Flex direction='row' height="50px" borderBottom="1px" borderBottomColor='hsl(0deg 0% 9%)' w="100%" justifyContent='space-around' alignItems='center'>
        <Flex w={{base:"fit-content", md:"33%"}} direction="row">
          <OmnidIcon boxSize={6} mx={4}/>
          <Text ml={4} display={{base:"none", md:"flex"}}>
            <Link href="https://rpc.omnid.space/"><b>Omnid RPC</b></Link> &nbsp;— Playground
          </Text>
        </Flex>
        <Flex w={{base:"100%", md:"33%"}} direction="row" justifyContent='center'>
          <Select w={{base: "100%", md:"300px"}} defaultValue='mainnet' size="sm" onChange={(e)=>{
            console.log('setting', e.currentTarget.value)
            setSelectedChain(e.currentTarget.value);
          }}>
            {
              Array.from(networks.keys()).map((net)=>{
                return (<option key={net} value={net}>{networks.get(net).chainName.replace('Omnid ', '')}</option>)
              })
            }
          </Select>
        </Flex>
        <Flex w={{base:"fit-content", md:"33%"}} alignItems="center" flexDirection='row-reverse'>
          <IconButton mr={4} variant="ghost" onClick={toggleColorMode}  icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}/>
        </Flex>
      </Flex>

      <Flex direction={{base: "column", md:"row" }} minHeight='calc(100vh - 50px)'>

        <Flex direction="column" height={{base: "400px", md: "calc(100vh - 50px)"}} overflowY="scroll" width={{base: "100%", md: "350px"}} borderRightWidth="1px" borderRightColor='hsl(0deg 0% 9%)' p={4}>
          <InputGroup>
            <InputLeftElement pointerEvents='none' >
              <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input  placeholder='filter' onChange={(e)=>{
              setFilterValue(e.currentTarget.value);
            }} value={filterValue} mb={2} borderColor='hsl(0deg 0% 9%)' />
          </InputGroup>
          {
            fuzzy.filter(filterValue, Object.keys(supportedFunctions)).map((e)=>{
              return (
                <Flex
                  key={e?.string}
                  background={selectedMethod === e?.string? `hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)` : 'transparent'}
                  _hover={{
                    background: `hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)`
                  }}
                  transition="all 0.3s"
                  px={2}
                  py={1}
                  my='1px'
                  borderRadius="5px"
                  cursor="pointer"
                  onClick={()=>{
                    setSelectedMethod(e?.string);
                    setRpcOutput({})
                    setRpcInput({
                      "id": 42,
                      "jsonrpc": "2.0",
                      "method": e?.string,
                    })
                  }}
                  fontWeight={selectedMethod === e?.string? 600 : 300}
                  fontSize="sm"
                >
                  {e?.string}
                </Flex>
              )
            })
          }
        </Flex>

        <Flex direction="column" width={{base: "100%", md: "calc( calc(100% - 350px) / 1.5 )"}} px={6} py={4} borderRightWidth="1px" borderRightColor='hsl(0deg 0% 9%)'>
          <Heading fontFamily='monospace'>
            {selectedMethod}
          </Heading>
          <Text fontWeight={300}>
            {supportedFunctions[selectedMethod].description}
          </Text>
          {
            supportedFunctions[selectedMethod].params.length ? (
              <Flex mt={4} direction="column">
                <Text color="secondary" fontSize='xs' textTransform='uppercase' mb={1}>PARAMS</Text>
                <Flex direction='column'>
                  {
                    supportedFunctions[selectedMethod].params.map((param, id)=>{
                      if (param.type ==='functionCall') return (
                        <FuntionCallDetails updateInputs={updateInputs}/>
                      )
                      if (param.type ==='boolean') return (
                        <Flex
                          key={id}
                          direction="column"
                          background={`hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)`}
                          p={3}
                          borderRadius="8px"
                          mb={4}
                        >
                          <Flex direction="row" align="center">
                            <Text>{param?.description}
                            {
                              param?.required === true ? (<span style={{color:"red", display:'inline'}}>&nbsp;*</span>) : (<></>)
                            }
                            </Text>
                            <Text color="hsl(0deg 0% 50% / 50%)" fontSize="xs" ml={1}>
                              ({param.type})
                            </Text>
                          </Flex>
                          <Switch size='md' id={'param_' + param?.name} onChange={updateInputs} mt={1}/>
                        </Flex>
                      )
                      else return (
                        <Flex
                          key={id}
                          direction="column"
                          background={`hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)`}
                          p={3}
                          borderRadius="8px"
                          mb={4}
                        >
                          <Flex direction="row" align="center">
                            <Text>{param?.name}
                            {
                              param?.required === true ? (<span style={{color:"red", display:'inline'}}>&nbsp;*</span>) : (<></>)
                            }
                            </Text>
                            <Text color="hsl(0deg 0% 50% / 50%)" fontSize="xs" ml={1}>
                              ({param.type})
                            </Text>
                          </Flex>
                          <Input type={param?.type === 'number' ? "number" : "text"}  id={'param_' + param?.name} onChange={updateInputs} mt={1} placeholder={param?.description}/>
                        </Flex>
                      )
                    })
                  }
                </Flex>
              </Flex>
            ) : (<></>)
          }
          <Button leftIcon={loading ? <Spinner size="sm"/> : <CodeIcon/>} w="fit-content" onClick={executeCall} colorScheme="blue" size="md" mt={4} isDisabled={loading}>
            Execute
          </Button>
        </Flex>

        <Flex direction="column" width={{base: "100%", md: "calc( calc(100% - 350px) / 3 )"}} p={4} overflowY="scroll" height={{base: "600px", md: "calc(100vh - 50px)"}} >
          <Text color="secondary" fontSize='xs' textTransform='uppercase' mb={1}>Request</Text>
          <ReactJson src={rpcInput} theme={colorMode === 'dark' ? 'colors' : 'bright:inverted'} name={null} style={{padding: '5px', borderRadius: '5px', lineBreak:'anywhere'}} sortKeys={true}/>
          <br/>
          <Text color="secondary" fontSize='xs' textTransform='uppercase' mb={1}>Response</Text>
          <ReactJson src={rpcOutput} theme={colorMode === 'dark' ? 'colors' : 'bright:inverted'} name={null} style={{padding: '5px', borderRadius: '5px', lineBreak:'anywhere'}} sortKeys={true}/>
          <br/>
          <Flex direction='row' justifyContent='space-between'>
            <Text color="secondary" fontSize='xs' textTransform='uppercase' mb={1}>History</Text>
            <DeleteIcon boxSize='12px' cursor='pointer' _hover={{color: 'red.500'}}  onClick={()=>{
              setHistory([])
            }} />
          </Flex>
          {
            history.slice(0).reverse().map((hist, oid)=>(
                <HistoryItem history={hist} key={oid} />
              )
            )
          }
        </Flex>
      </Flex>
    </Flex>
    </HotKeys>
  )
}

const FuntionCallDetails = ({updateInputs}) => {

  const [abi, setAbi] = useState([]);
  const [intf, setInterface] = useState(false);
  let { colorMode } = useColorMode();

  useEffect(()=>{
    try {

      const tempabi = JSON.parse(abi).filter((e)=>{
        return e?.stateMutability === 'view';
      });
      const iface = new ethers.utils.Interface(tempabi);
      console.log('inf', iface);
      setInterface(iface);

    } catch (error) {
      console.log('error', error);
    }

  },[abi])

  return (
    <>

      <Flex
        direction="column"
        background={`hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)`}
        p={3}
        borderRadius="8px"
        mb={4}
      >
        <Flex direction="row" align="center">
          <Text>
            Address <span style={{color:"red", display:'inline'}}>&nbsp;*</span>
          </Text>
          <Text color="hsl(0deg 0% 50% / 50%)" fontSize="xs" ml={1}>
            (address)
          </Text>
        </Flex>
        <Input onChange={updateInputs} mt={1} placeholder='Address' id="param_address"/>
      </Flex>

      <Flex
        direction="column"
        background={`hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)`}
        p={3}
        borderRadius="8px"
        mb={4}
      >
        <Flex direction="row" align="center">
          <Text>
            ABI <span style={{color:"red", display:'inline'}}>&nbsp;*</span>
          </Text>
          <Text color="hsl(0deg 0% 50% / 50%)" fontSize="xs" ml={1}>
            (JSON)
          </Text>
        </Flex>
        <Textarea onChange={(e)=>{
          setAbi(e.currentTarget.value);
        }} mt={1} placeholder='ABI of the Contract'/>
      </Flex>

      <Flex
        direction="column"
        background={`hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)`}
        p={3}
        borderRadius="8px"
        mb={4}
      >
        <Flex direction="row" align="center">
          <Text>
            Method <span style={{color:"red", display:'inline'}}>&nbsp;*</span>
          </Text>
        </Flex>
        <Select mt={1} isDisabled={!Boolean(intf)} id="param_method" onChange={updateInputs}>
          {
            intf && Object.keys(intf.functions).map((name, oid)=>{
              return (<option value={intf.getSighash(name)} key={oid}>{name}</option>)
            })
          }
        </Select>
        <Textarea placeholder="data" mt={1}  id="param_method_data" isDisabled={!Boolean(intf)} onChange={updateInputs}/>
      </Flex>
    </>

  )
}


const HistoryItem = ({history, key}) => {

  const [isOpen, setIsOpen] = useState(false);
  let { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      key={key}
      background={`hsl(0deg 0% 9% / ${colorMode === 'dark' ? 8 : 1}0%)`}
      p={3}
      borderRadius="8px"
      mb={1}
      cursor="pointer"
    >
      <Flex direction="row" onClick={()=>{setIsOpen(!isOpen)}} justifyContent="space-between" alignItems='center'>
        <Text>
          { isOpen ? (<ChevronDownIcon boxSize={4} mr={2} mb='2px'/>): (<ChevronRightIcon boxSize={4} mr={2} mb='2px'/>) }
          {history.method}
          <chakra.code
            marginLeft='10px'
            backgroundColor={colorMode === 'dark'? 'gray.800': 'gray.200'}
            p={1}
            borderRadius="5px"
            fontSize='xs'
          >
            {history.selectedChain}
          </chakra.code>
        </Text>
        <Text color="secondary" fontSize='xs' textTransform='uppercase'>
          {history.time.toLocaleTimeString()}
        </Text>
      </Flex>
      <Flex direction="column" display={isOpen ? 'flex': 'none' }>
        <ReactJson
          src={history.output}
          theme={colorMode === 'dark' ? 'colors' : 'bright:inverted'}
          name={null}
          style={{padding: '5px', borderRadius: '5px', lineBreak:'anywhere'}}
          sortKeys={true}
        />
      </Flex>
    </Flex>
  )
}
