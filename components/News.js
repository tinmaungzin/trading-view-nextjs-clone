import styled from "@emotion/styled";

import NewsItem from "components/NewsItem";
import { Flex, Box } from "reflexbox";

function News() {
  return (
    <NewsStyled>
      <Box
        my={4}
        maxWidth="456px"
        mx={["auto", "auto", "auto", 3, 3]}
        width="100%"
      >
        <Flex mb={3} ml={0}>
          <Box as="h1">News</Box>
        </Flex>

        <Flex
          flexDirection={["row", "row", "row", "column", "column"]}
          overflowX="auto"
        >
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </Flex>
      </Box>
    </NewsStyled>
  );
}

const NewsStyled = styled.div`
  /* h1{
        margin-top: 30px;
        margin-bottom: 20px;
    }

    margin-bottom: 30px; */
`;

export default News;
