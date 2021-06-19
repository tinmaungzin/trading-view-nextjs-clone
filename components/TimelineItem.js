import styled from '@emotion/styled'
import Image from 'next/image'
import { Flex,Box } from 'reflexbox'


function TimelineItem() {

    return (


        <TimelineItemStyled>

            <Box px={2} py={3} sx={{borderBottom: "1px #f0f3fa solid" }}>
                    <Flex>
                        <Box>
                            <Image className="source-image" src="/test.png" alt="me" width="24" height="24" />
                        </Box>
                        <Box as='p' px={2}>
                            RIDE
                        </Box>
                        <Box px={2}>
                            Jun 16 . 2021
                        </Box>
                        
                    </Flex>
                    <Flex>
                        <Box width='85%'>
                            <Box my={2}>
                                Getting all excited over Alfi
                            </Box>
                            <Box>
                            Ad tech company Alfi hasn't been on the market for long, but it’s already making waves. Prices soar over 100% this week on the back of an impressive tablet supply deal for Uber and Lyft drivers.
                            </Box>
                        </Box>
                        <Flex bg="#f0f3fa" justifyContent="center" className="icon" px='15px' height={50}>
                            <Image   src="/icon.svg" alt="me" width="24" height="24" />

                        </Flex>
                    </Flex>
                </Box>

        </TimelineItemStyled>

    )
}

const TimelineItemStyled = styled.div`
    cursor: pointer;
    .source-image{
        border-radius: 50%;
    }

    :hover{
        background: #e5ecff;
        border-radius: 10px;
    }

    .icon{
        border-radius: 50%;
    }

`


export default TimelineItem