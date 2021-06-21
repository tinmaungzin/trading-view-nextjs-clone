import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

function NewsItem() {
  return (
    <NewsItemStyled>
      <Box
        mx={2}
        py={3}
        px={2}
        sx={{
          border: [
            "1px #f0f3fa solid",
            "1px #f0f3fa solid",
            "1px #f0f3fa solid",
            "0px #f0f3fa solid",
            "0px #f0f3fa solid",
          ],
          borderBottom: [
            "0px #f0f3fa solid",
            "0px #f0f3fa solid",
            "0px #f0f3fa solid",
            "1px #f0f3fa solid",
            "1px #f0f3fa solid",
          ],
          borderRadius: ["10px", "10px", "10px", "0", "0"],
        }}
        minWidth="292px"
      >
        <Flex py={2} color="#80838d">
          <Box> 15:13 . Jan 16</Box>
          <Box ml={2}>Reuters</Box>
        </Flex>
        <Box as="p">
          Japan vows 'safe and secure' Olympics in economic blueprint - draft
        </Box>
      </Box>
    </NewsItemStyled>
  );
}

const NewsItemStyled = styled.div`
  cursor: pointer;

  :hover {
    background: #e5ecff;
    border-radius: 10px;
  }
`;

export default NewsItem;
