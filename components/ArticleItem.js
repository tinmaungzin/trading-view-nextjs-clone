import styled from "@emotion/styled";

import Image from "next/image";

import { Flex, Box } from "reflexbox";

function ArticleItem({ article }) {
  const { API_URL } = process.env;

  return (
    <ArticleItemStyled>
      <Box
        width="100%"
        sx={{ border: "1px solid #ebedf0", borderRadius: "4px" }}
        px={3}
        py={3}
        my={3}
        flex="none"
      >
        <Flex justifyContent="space-between">
          <Box as="h2">Lorem Ipsum lorem lorrm lore m lk9oknkljlkhnjol</Box>
          <Box>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.6 6.69a6.19 6.19 0 000 8.74l.04.04 7.3 7.3a1.5 1.5 0 002.12 0l7.3-7.3.03-.03A6.19 6.19 0 0014 6.36a6.19 6.19 0 00-8.4.33zm.52 7.84L8.76 12a2 2 0 113.72-.71l2.4 1.55a2 2 0 013-.28l4.57-4.2a5.2 5.2 0 00-8.1-.97c-.19.2-.5.2-.7.01a5.19 5.19 0 00-7.53 7.13zM22.9 9.3l-4.48 4.11a2 2 0 11-3.91.38l-2.42-1.58a2 2 0 01-2.63.5l-2.64 2.52 6.83 6.82c.2.2.5.2.7 0l7.31-7.3.03-.03A5.19 5.19 0 0022.9 9.3zM9.5 11a1 1 0 112 0 1 1 0 01-2 0zm7 2a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
              ></path>
            </svg>
          </Box>
        </Flex>
        <Box as="p">WAX</Box>

        <Box my={3}>
          <Image src="/test.png" alt="me" width="440" height="254" />
        </Box>

        <Flex justifyContent="space-between">
          <Flex>
            <Box sx={{ borderRadius: "50%" }}>
              <Image src="/test.png" alt="me" width="28" height="28" />
            </Box>
            <Box as="p" pl={2} pt={1}>
              Stephen King
            </Box>
            <Box
              as="p"
              color="white"
              py={2}
              ml={3}
              px={3}
              fontSize="10px"
              bg="#ef5350"
              sx={{ borderRadius: "20px" }}
            >
              PRO
            </Box>
          </Flex>
          <Box color="#979aa2">Jan 4</Box>
        </Flex>
        <Box mt={3} className="line-clamp">
          1. Commodity Currencies Australia, Canada, and New Zealand all have
          commodities that fluctuate with respect to commodity prices. As demand
          for these countries' export has risen and commodities have increased
          in value, these three currencies and over more
        </Box>

        <Flex justifyContent="space-between" my={3}>
          <Flex
            sx={{ border: "1px solid #ebedf0", borderRadius: "20px" }}
            px={3}
            py={2}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g fill="none" stroke="currentColor">
                <path d="M2.5 8.5h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z"></path>
                <path
                  stroke-linejoin="round"
                  d="M12.624 2.64l1.388.174A1.7 1.7 0 0 1 15.5 4.5v4h3.072a3 3 0 0 1 2.895 3.79l-1.364 5a3 3 0 0 1-2.894 2.21H10l-1.5-1h-1v-8h1l3-4V3.633a1 1 0 0 1 1.124-.992z"
                ></path>
              </g>
            </svg>
            <Box as="p" pt={1} ml={1}>
              170
            </Box>
          </Flex>
          <Flex py={2}>
            <Flex px={3}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    d="M5.5 4.5h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-12l-3 3v-14a2 2 0 0 1 2-2z"
                  ></path>
                  <path fill="currentColor" d="M8 9h8v1H8zm0 3h8v1H8z"></path>
                </g>
              </svg>
              <Box as="p" ml={2} pt={1}>
                50
              </Box>
            </Flex>
            <Box px={3}>
              <svg
                className="share"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <g fill="none" stroke="currentColor" stroke-linejoin="round">
                  <path d="M8.005 7.5H15L19.5 4v14L15 14.5H8.394a3.706 3.706 0 0 1-3.7-3.5 3.316 3.316 0 0 1 3.311-3.5z"></path>
                  <path d="M8.5 14.5H12l.687 3.778A1.46 1.46 0 0 1 11.25 20h-.08a2 2 0 0 1-1.97-1.642L8.5 14.5z"></path>
                </g>
              </svg>
            </Box>
            <Box px={3}>
              <svg
                className="follow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  d="M5.5 4.5h13v15L12 15.3l-6.5 4.2z"
                ></path>
              </svg>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </ArticleItemStyled>
  );
}

const ArticleItemStyled = styled.div`
  cursor: pointer;
  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default ArticleItem;
