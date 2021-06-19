import styled from '@emotion/styled'
import Chart from 'components/Chart'
import Timeline from 'components/Timeline'
import News from 'components/News'
import { Flex,Box } from 'reflexbox'



function Right() {
    return (
        
        <RightStyled>

            
            <Chart />
            <Timeline />
            <News />
            

        </RightStyled>


    )
}

const RightStyled = styled.div`

    /* width: 500px;
    margin-left: 80px; */
    /* bottom: 0;
    position: sticky; */
   

`



export default Right