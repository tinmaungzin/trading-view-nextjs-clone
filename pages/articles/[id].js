import styled from "@emotion/styled";

import Image from "next/image";

import { Flex, Box } from "reflexbox";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

function Article({ article }) {
  return (
    <ArticleDetailedStyled>
      <Box maxWidth={960} mx="auto" my={5}>
        <Box sx={{ borderBottom: "1px black solid" }}>
          <Box as="h1">{article.title}</Box>
          <Box my={3}>{article.symbol}</Box>
          <Box my={3}>{article.authors[0].name}</Box>
        </Box>
        <Box my={5} textAlign="center">
          <Image src="/test.png" alt="me" width="500" height="300" />
        </Box>
        <Box my={3} lineHeight={2}>
          {article.content}
        </Box>
      </Box>
    </ArticleDetailedStyled>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { id } = context.query;
  // const res = await fetch(`${publicRuntimeConfig.API_URL}/articles/${id}`);
  const res = await fetch(
    `https://trading-view-strapi-clone.herokuapp.com/articles/${id}`
  );
  const data = await res.json();

  return {
    props: {
      article: data,
    },
  };
}

const ArticleDetailedStyled = styled.div``;

export default Article;
