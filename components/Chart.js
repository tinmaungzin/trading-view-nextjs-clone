import styled from '@emotion/styled'
import Image from 'next/image'

import Price from 'components/Price'

import { Flex,Box } from 'reflexbox'


function Chart() {


    return (

        <ChartStyled>
            <Box my={4} maxWidth='456px' mx={["auto","auto","auto",3,3]} width="100%">
                <Flex>
                    <Box as="h1" >
                        Market Summary
                    </Box>
                    <Box py={3} pl={3}>
                        <svg className="side-arrow" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                            <path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l4 5-4 5"></path>
                        </svg>
                    </Box>
                </Flex>
                <Flex mt={3}>
                    <Box as='p' pr={5}>Indices</Box>
                    <Box as='p' pr={5}>Currencies</Box>
                    <Box as='p' pr={5}>Futures</Box>
                    <Box as='p' pr={5}>Crypto</Box>
                    <Box as='p' pr={5}>Bonds</Box>
                </Flex>
                <Box>
                    <Image className="photo" src="/chart1.png" alt="me" width="456" height="142" />
                </Box>
                <Flex mt={3} sx={{borderBottom: "1px #f0f3fa solid" }} pb={3} >
                    <Box as='p' pr={3}>1D</Box>
                    <Box as='p' pr={3}>1M</Box>
                    <Box as='p' pr={3}>3M</Box>
                    <Box as='p' pr={3}>1Y</Box>
                    <Box as='p' pr={3}>5Y</Box>
                    <Box as='p' pr={3}>All</Box>
                </Flex>

                <Price />
                <Price />
                <Price />


                <Flex mt={3} color="#2962ff">


                    <Box as='p'>
                        More indices
                    
                    </Box>
                    <Box pt='3px' pl={2}>
                        <svg className="bottom-text-svg" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                            <path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l4 5-4 5"></path>
                        </svg>
                    </Box>

                </Flex>

                



            </Box>
            

            </ChartStyled>



    )

}


const ChartStyled = styled.div`


   
`






export default Chart