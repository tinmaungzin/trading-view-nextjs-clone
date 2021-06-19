import styled from '@emotion/styled'

import Image from 'next/image'

import ArticleItem from 'components/ArticleItem'

import { Flex,Box } from 'reflexbox'


function Article ({articles}) {
    return (

        <ArticleStyled>
        
            <Box my={4} maxWidth={470} mx={["auto","auto","auto",3,3]} width="100%">
                <Flex>
                    <Box as="h1" >
                        Editor's pick
                    </Box>
                    <Box py={3} pl={3}>
                        <svg className="side-arrow" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
                            <path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l4 5-4 5"></path>
                        </svg>
                    </Box>
                </Flex>

                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
            </Box>



        {/* // <ArticleStyled>
        //     <h1>Editor's pick
        //         <svg className="side-arrow" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
        //             <path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l4 5-4 5"></path>
        //         </svg>
        //     </h1>

        //     {articles.map(article =>(
        //         <ArticleItem key={article.id} article={article} />
        //     ))} */}

            
            
            
            

            
        </ArticleStyled>
    )
}


const ArticleStyled = styled.div`

    /* width: 600px;
    h1{
        margin-left: 200px;
        margin-top: 30px;
    }
    .side-arrow{
        margin-left: 10px;
    } */

`

export default Article