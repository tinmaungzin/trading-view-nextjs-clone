import styled from "@emotion/styled";

import Image from "next/image";

import { Flex, Box } from "reflexbox";

function Footer() {
  return (
    <FooterStyled>
      <Box pt={4} maxWidth={1050} width="100%" mx="auto" mb={5}>
        <Flex justifyContent="space-around">
          <Box>
            <Box fontWeight="bold" mb={2}>
              Products
            </Box>
            <Box py={1}>Chart</Box>
            <Box py={1}>Pine Script</Box>
            <Box py={1}>Stock Screener</Box>
            <Box py={1}>Forex Screener</Box>
            <Box py={1}>Crypto Screener</Box>
            <Box py={1}>Economic Calender </Box>
            <Box py={1}>Earning Calender </Box>
          </Box>

          <Box>
            <Box fontWeight="bold" mb={2}>
              Company
            </Box>
            <Box py={1}>About</Box>
            <Box py={1}>Features</Box>
            <Box py={1}>Pricing</Box>
            <Box py={1}>Wall of Love</Box>
            <Box py={1}>Blog</Box>
            <Box py={1}>Security vulnerability</Box>
            <Box py={1}>Status page</Box>
            <Box py={1}>Terms of use</Box>
            <Box py={1}>Disclaimer</Box>
            <Box py={1}>Privacy policy</Box>
            <Box py={1}>Cookies police</Box>
          </Box>
          <Box>
            <Box fontWeight="bold" mb={2}>
              Community
            </Box>
            <Box py={1}>Refer a friend</Box>
            <Box py={1}>Ideas</Box>
            <Box py={1}>Scripts</Box>
            <Box py={1}>Streams</Box>
            <Box py={1}>House rules</Box>
            <Box py={1}>Moderators</Box>
            <Box py={1}>Pine Wizards</Box>
            <Box py={1}>Chat</Box>
          </Box>
          <Box>
            <Box fontWeight="bold" mb={2}>
              For business
            </Box>
            <Box py={1}>Wigets</Box>
            <Box py={1}>Advertising</Box>
            <Box py={1}>Website & broker solutions</Box>
            <Box py={1}>Charting solutions</Box>
            <Box py={1}>Lightweight Charting Library</Box>
            <Box py={1}>Brokerage integration</Box>
            <Box py={1}>Partner program</Box>
            <Box py={1}>Content streams & RSS</Box>
          </Box>
        </Flex>
      </Box>

      <Box width="70%" className="lower" mx="auto" mb={5} pt={3}>
        <Flex flexDirection={["column", "column", "column", "row", "row"]}>
          <Flex
            justifyContent={["center", "center", "center", null, null]}
            my={[3, 3, 3, 0, 0]}
          >
            <Box display={["none", "none", "none", "block", "block"]}>
              <Flex bg="#f0f3fa" px={3} py={1} sx={{ borderRadius: "3px" }}>
                <Image
                  className="desktop-svg"
                  src="/desktop.svg"
                  alt="me"
                  width="28"
                  height="40"
                />
                <Flex flexDirection="column" ml={1} mt={1} fontWeight="bold">
                  <Box fontSize="12px">Download</Box>
                  <Box>Desktop app</Box>
                </Flex>
              </Flex>
            </Box>
            <Box bg="#f0f3fa" ml={3} sx={{ borderRadius: "3px" }} pt={1} px={2}>
              <Image
                className="desktop-svg"
                src="/apple.svg"
                alt="me"
                width="135"
                height="40"
              />
            </Box>
            <Box bg="#f0f3fa" ml={3} sx={{ borderRadius: "3px" }} pt={1} px={2}>
              <Image
                className="desktop-svg"
                src="/playstore.svg"
                alt="me"
                width="135"
                height="40"
              />
            </Box>
          </Flex>
          <Flex
            px={5}
            justifyContent={["center", "center", "center", null, null]}
            my={[3, 3, 3, 0, 0]}
          >
            <Box bg="#f0f3fa" mx={2} pt={2} sx={{ borderRadius: "3px" }} px={2}>
              <svg
                className="social-svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 4a10 10 0 011.56 19.88v-6.99h2.33l.45-2.89h-2.78v-1.88c0-.79.39-1.56 1.63-1.56h1.26V8.1s-1.14-.2-2.24-.2c-2.28 0-3.77 1.4-3.77 3.9V14H9.9v2.9h2.54v6.98A10.01 10.01 0 0114 4z"
                  fill="#1877F2"
                ></path>
              </svg>
            </Box>
            <Box bg="#f0f3fa" mx={2} pt={2} sx={{ borderRadius: "3px" }} px={2}>
              <svg
                className="social-svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"
                  fill="#1DA1F2"
                ></path>
              </svg>
            </Box>
            <Box bg="#f0f3fa" mx={2} pt={2} sx={{ borderRadius: "3px" }} px={2}>
              <svg
                className="social-svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4a2 2 0 00-2 2v16c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2H6zm4.36 7.83v9.34h-3.1v-9.34h3.1zm.2-2.9c0 .9-.67 1.62-1.75 1.62H8.8c-1.04 0-1.7-.71-1.7-1.6 0-.92.68-1.62 1.74-1.62s1.71.7 1.73 1.6zm4.6 12.24h-3.09s.03-8.46 0-9.34h3.08v1.34a3.07 3.07 0 012.8-1.56c2.03 0 3.56 1.34 3.56 4.2v5.36h-3.1v-5c0-1.25-.44-2.1-1.56-2.1-.85 0-1.36.57-1.59 1.13-.08.2-.1.48-.1.76v5.21z"
                  fill="#2867B2"
                ></path>
              </svg>
            </Box>
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-between"
          mt={4}
          color="#787b86"
          flexDirection={["column", "column", "column", "row", "row"]}
        >
          <Box mx={["auto", "auto", "auto", 0, 0]} py={2}>
            <svg width="127" height="19" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M45.2 4.96V15h-1.56V4.96H40v-1.4h9v1.4h-3.8zm7.79 3.1a1.7 1.7 0 00-.98-.33c-.52 0-.98.24-1.38.72-.4.49-.59 1.07-.59 1.75V15h-1.48V6.63h1.48v1.34a2.6 2.6 0 012.42-1.5c.26 0 .65.05 1.15.15l-.62 1.44zm6.4 5.98c-.6.74-1.5 1.12-2.73 1.12-.66 0-1.23-.24-1.7-.72a2.4 2.4 0 01-.73-1.78c0-.84.37-1.56 1.11-2.15a4.44 4.44 0 012.84-.88c.32 0 .67.07 1.07.2 0-1.35-.6-2.03-1.82-2.03-.92 0-1.64.25-2.14.75l-.62-1.24a4.55 4.55 0 012.6-.84c1.2 0 2.09.28 2.64.83.55.56.82 1.43.82 2.64v3c0 .73.22 1.22.66 1.47v.74a2.8 2.8 0 01-1.36-.26c-.3-.17-.51-.46-.64-.85zm-.14-3.15c-.47-.1-.8-.16-.99-.16-.75 0-1.36.2-1.83.58-.48.39-.72.84-.72 1.37 0 .87.52 1.3 1.54 1.3.75 0 1.42-.35 2-1.07V10.9zm9.12 4.1v-.62c-.51.52-1.26.78-2.25.78-1.05 0-1.9-.38-2.55-1.13a4.42 4.42 0 01-.97-3c0-1.25.37-2.32 1.12-3.21a3.4 3.4 0 012.68-1.33c.87 0 1.52.2 1.97.6V3.2h1.49V15h-1.49zm0-6.42a1.76 1.76 0 00-1.54-.84c-.8 0-1.44.3-1.93.89-.5.6-.74 1.35-.74 2.26 0 2.02.92 3.03 2.75 3.03.23 0 .52-.08.84-.23.33-.14.54-.3.62-.47V8.57zm5.14-5.1c.26 0 .47.09.65.27.18.18.27.4.27.64 0 .26-.09.48-.27.66a.89.89 0 01-.65.26.88.88 0 01-.64-.26.89.89 0 01-.27-.66c0-.25.09-.47.26-.65.18-.17.4-.26.65-.26zM72.7 15V7.88h-1.15V6.63h2.63V15H72.7zm9 0v-4.87c0-.89-.14-1.51-.41-1.87-.27-.36-.72-.53-1.35-.53-.34 0-.7.1-1.06.3-.37.2-.66.45-.85.75V15h-1.49V6.63h1.02l.47 1.08c.49-.82 1.29-1.23 2.4-1.23 1.83 0 2.75 1.11 2.75 3.34V15h-1.49zm3.28 2.29l.8-1.19c.87.58 1.67.87 2.4.87.67 0 1.2-.12 1.59-.35.38-.23.58-.52.58-.86 0-.68-.5-1.02-1.47-1.02-.17 0-.47.04-.9.13-.45.08-.79.12-1.03.12-1.19 0-1.78-.45-1.78-1.34 0-.28.14-.53.42-.75a2.6 2.6 0 011.03-.49c-1.18-.55-1.76-1.5-1.76-2.87 0-.88.3-1.6.9-2.19.62-.58 1.37-.87 2.27-.87.82 0 1.46.17 1.93.5l.74-.89.97.92-.9.67c.39.5.58 1.14.58 1.94a3.02 3.02 0 01-2.86 3.1l-1.23.13c-.14.02-.34.07-.58.17-.25.1-.37.22-.37.38 0 .21.25.32.76.32.23 0 .58-.04 1.05-.12.47-.08.83-.12 1.06-.12.82 0 1.46.2 1.92.59.46.39.7.94.7 1.63 0 .77-.35 1.4-1.04 1.87-.7.47-1.57.71-2.62.71-.55 0-1.12-.1-1.71-.29-.6-.2-1.09-.42-1.45-.7zm3.15-9.62c-.52 0-.94.18-1.26.55-.33.36-.5.8-.5 1.33 0 .58.17 1.06.48 1.45.32.38.74.57 1.28.57.52 0 .94-.19 1.23-.56.3-.37.45-.86.45-1.46 0-.52-.16-.97-.48-1.33a1.53 1.53 0 00-1.2-.55zm9.29 7.49h-.8l-4.26-11.6h1.74l2.94 8.42 2.84-8.43h1.68l-4.14 11.6zm6.54-11.7c.25 0 .47.1.65.28.18.18.27.4.27.64 0 .26-.1.48-.27.66a.89.89 0 01-.65.26.88.88 0 01-.65-.26.9.9 0 01-.27-.66c0-.25.1-.47.27-.65.17-.17.4-.26.65-.26zM103.14 15V7.88H102V6.63h2.63V15h-1.49zm10.9-4.04H108c0 .98.27 1.73.8 2.26.48.46 1.1.69 1.84.69.84 0 1.55-.25 2.12-.75l.63 1.07c-.23.23-.58.43-1.06.6a5.7 5.7 0 01-1.98.33 3.7 3.7 0 01-2.68-1.07 4.2 4.2 0 01-1.23-3.18c0-1.38.42-2.48 1.26-3.32a3.65 3.65 0 012.66-1.11c1.2 0 2.13.33 2.8 1 .66.65 1 1.5 1 2.57 0 .33-.05.63-.13.91zm-3.6-3.23a2.32 2.32 0 00-2.39 2.16h4.63c0-.6-.2-1.1-.57-1.5a2.2 2.2 0 00-1.68-.66zm13 7.43h-.38l-2.45-5.7-2.45 5.7h-.4l-2.98-8.55h1.58l1.8 5.5 2.22-5.5h.39l2.3 5.5 1.92-5.5h1.46l-3 8.55z"
                fill="currentColor"
              ></path>
              <path
                d="M30.03 7.38c.56.83.91 1.81.96 2.87A4.5 4.5 0 0129.5 19H7a5.98 5.98 0 01-4.22-1.74l9.55-7.55a2.49 2.49 0 002.24.05l4.55 3.98a2.5 2.5 0 104.71-.15l6.2-6.2zM28.6 5.97l-6.2 6.2a2.5 2.5 0 00-1.98.07l-4.55-3.98a2.5 2.5 0 10-4.8-.12l-9.47 7.5A6 6 0 017.06 7a8 8 0 0115.62-1.23 5.47 5.47 0 015.93.2z"
                fill="#2962FF"
              ></path>
            </svg>
          </Box>
          <Flex
            flexDirection="column"
            mx={["auto", "auto", "auto", 0, 0]}
            py={2}
          >
            <Box>
              Select market data provided by{" "}
              <span className="company">ICE Data Services</span>
            </Box>
            <Box>© 2021 TradingView</Box>
          </Flex>
        </Flex>
      </Box>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  border-top: 2px #e0e3eb solid;

  .lower {
    border-top: 2px #e0e3eb solid;
  }

  .company {
    color: #6762ff;
  }
`;

export default Footer;
