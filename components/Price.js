import styled from '@emotion/styled'
import Image from 'next/image'

import { Flex,Box } from 'reflexbox'



function Price() {



    return (

                <PriceStyle >
                    <Flex maxWidth='456px' px={2} sx={{borderBottom: "1px #f0f3fa solid" }} py={3} justifyContent="space-between">
                        <Flex>
                            <Box pt={2}>                        
                                <Image className="flag" src="/US.svg" alt="me" width="24" height="24" />
                            </Box>
                            <Flex flexDirection="column" ml={2} >
                                <Box>
                                    S&P 500
                                </Box>
                                <Box fontSize='12px' color="#9196a2" pt={1}>
                                    S&P 500 E-MINI FUTURES
                                </Box>
                            </Flex>
                            
                        </Flex>
                        <Box pt={2}>
                            4239.25 <sup>D</sup>
                        </Box>
                        <Flex flexDirection="column">
                            <Box>
                                +0.06%
                            </Box>
                            <Box textAlign="right">
                                2.57
                            </Box>
                        </Flex>
                    </Flex>

                    

                </PriceStyle>

    )

}

const PriceStyle = styled.div`

    cursor: pointer;

    :hover{
        background: #e5ecff;
        border-radius: 4px;
    }

    .flag{
        border-radius: 50%;
    }
    sup{
        color: #ffb547;
    }

   
`


export default Price