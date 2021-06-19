import styled from '@emotion/styled'
import { Flex,Box } from 'reflexbox'


function Banner() {
    return (
        <BannerSyled>
           <Flex flexDirection="column" sx={{borderBottom: "1px solid #e0e3eb"}} py={5}>
               <Flex py={4} mx="auto" as='h1' justifyContent="center"  textAlign="center">
                   The Fastest way to follow market
                </Flex>
               <Flex justifyContent="center"  py={3} mx="auto"  sx={{borderRadius: "30px"}} width="200px" bg="#2962ff" color="white">
                   <Box fontSize="20px">
                   Launch chart
                    </Box>
                </Flex>
           </Flex>
        </BannerSyled>

    )
}

const BannerSyled = styled.div`

    /* display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e0e3eb;
    padding-bottom: 60px;
    h1{
        margin: 0 auto;
        font-size: 45px;
        margin-top: 80px;
    }
    button{
        background: ${props => props.theme.colors.primary};
        color: white;
        border: none;
        margin: 0 auto;
        margin-top: 50px;
        padding: 15px;
        width: 18%;
        font-size: 25px;
        border-radius: 30px;
    } */


`

export default Banner