import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Article from 'components/Article'
import Right from 'components/Right'
import Footer from 'components/Footer'
import styled from '@emotion/styled'
import fetch from 'isomorphic-unfetch'
import { Flex,Box } from 'reflexbox'


export default function Home({articles}) {
  return (

    <HomeStyled>
      <Box maxWidth={1200} width='100%' mx="auto">
        <Flex justifyContent='center' flexDirection={["column","column","column","row","row"]}>
          <Article articles={articles}/>
          <Right />
        </Flex>
      </Box>
      
      
      
      <Footer />
    </HomeStyled>
    

  )
}

const HomeStyled = styled.div`
/* background: rgba(0, 0, 0, 0.5); */

  .content{
 display: flex;
    justify-content: end;
  }
   
  
  `

  export async function getServerSideProps() {

    const { API_URL } =process.env
    const res = await fetch(`${API_URL}/articles`)
    const data = await res.json()

    return {
      props: {
        articles: data
      }
    }

  }
