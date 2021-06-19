import styled from '@emotion/styled'
import Image from 'next/image'


import { Flex,Box } from 'reflexbox'
import TimelineItem from 'components/TimelineItem'


function Timeline() {


    return (


        <TimelineStyled>

            <Box my={4} maxWidth='456px' mx={["auto","auto","auto",3,3]} width="100%">
                <Flex mb={3}>
                    <Box as="h1" >
                        Timelines
                    </Box>
                
                </Flex>


               <TimelineItem />
               <TimelineItem />
               <TimelineItem />


               

            </Box>

            

            
        </TimelineStyled>

    )

}

const TimelineStyled = styled.div`

   




`

export default Timeline

