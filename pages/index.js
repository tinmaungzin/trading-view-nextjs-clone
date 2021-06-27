import Image from "next/image";
import styles from "../styles/Home.module.css";
import Article from "components/Article";
import Right from "components/Right";
import styled from "@emotion/styled";
import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import Banner from "components/Banner";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <HomeStyled>
      <Banner />

      <Box maxWidth={1200} width="100%" mx="auto">
        <Flex
          justifyContent="center"
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
        >
          <Article articles={articles} />
          <Right />
        </Flex>
      </Box>
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  /* background: rgba(0, 0, 0, 0.5); */

  .content {
    display: flex;
    justify-content: end;
  }
`;

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/articles`);
  // const res = await fetch(
  //   "https://trading-view-strapi-clone.herokuapp.com/articles"
  // );
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
