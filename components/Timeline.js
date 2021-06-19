import styled from '@emotion/styled'
import Image from 'next/image'


import { Flex,Box } from 'reflexbox'
import TimelineItem from 'components/TimelineItem'


function Timeline() {


    return (


        <TimelineStyled>

            <Box my={4} maxWidth='456px' mx={["auto","auto","auto",3,3]} width="100%">
                <Flex mb={3} ml={[3,3,3,0,0]}>
                    <Box as="h1" >
                        Timelines
                    </Box>
                
                </Flex>



                <Flex flexDirection="column" >
                    <TimelineItem  />
                    <TimelineItem  />
                    <TimelineItem  />
                    {/* <TimelineItem />
                    <TimelineItem /> */}
                </Flex>

               


               

            </Box>

            

            
        </TimelineStyled>

    )

}

const TimelineStyled = styled.div`

   



`

export default Timeline

