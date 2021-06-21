import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function Header() {
  return (
    <HeaderStyled>
      <Flex
        id="menu"
        className="sidebar"
        bg="white"
        flexDirection="column"
        py={1}
        height="100%"
        opacity={1}
        sx={{ transition: "0.5s", overflowX: "hidden" }}
      >
        <Box
          onClick={toggleMenu}
          pl={3}
          sx={{ borderBottom: "1px solid #e0e3eb" }}
          py={3}
        >
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.4 1.4l-1.4-1.4-8 8 8 8 1.4-1.4-6.389-6.532 6.389-6.668z"></path>
          </svg>
        </Box>
        <Flex pl={3} pt={4}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="28"
              height="28"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M9 6.5h10A2.5 2.5 0 0121.5 9v10a2.5 2.5 0 01-2.5 2.5H9A2.5 2.5 0 016.5 19V9A2.5 2.5 0 019 6.5zM5 9a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H9a4 4 0 01-4-4V9zm14.52 3.54a.75.75 0 10-1.04-1.08l-2.88 2.8-2.82-2.11a.75.75 0 00-.97.06l-3.33 3.25a.75.75 0 001.04 1.08l2.88-2.8 2.82 2.11c.3.22.7.2.97-.06l3.33-3.25z"
              ></path>
            </svg>
          </Box>
          <Box
            pt={1}
            pl={3}
            sx={{ borderBottom: "1px solid #e0e3eb" }}
            width="100%"
            pb={4}
          >
            Chart
          </Box>
        </Flex>
        <Flex pl={3} pt={4}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="28"
              height="28"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M16.5 9c0 1.14-.3 1.99-.79 2.54-.46.52-1.27.96-2.71.96s-2.25-.44-2.71-.96A3.74 3.74 0 019.5 9c0-1.14.3-1.99.79-2.54.46-.52 1.27-.96 2.71-.96s2.25.44 2.71.96c.5.55.79 1.4.79 2.54zM18 9c0 2.76-1.45 5-5 5s-5-2.24-5-5 1.45-5 5-5 5 2.24 5 5zm-8 8.5h3.23c.17-.55.43-1.05.77-1.5h-4c-4.92 0-6.04 2.37-6.86 4.89-.46 1.43.67 3.11 2.18 3.11h7.78c-.07-.32-.1-.66-.1-1v-.5H5.32c-.17 0-.4-.1-.6-.37a.91.91 0 01-.15-.78c.4-1.24.8-2.12 1.47-2.74.64-.58 1.74-1.11 3.96-1.11zm14.53-3.03c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 01-.98.07l-1.48-1.11-2.04 2.04a.75.75 0 01-1.06-1.06l2.5-2.5c.26-.26.68-.3.98-.07l1.48 1.11 2.04-2.04c.3-.3.77-.3 1.06 0zM17 21.75V24h1.5v-2.25a.75.75 0 10-1.5 0zM20 24v-3.25a.75.75 0 011.5 0V24H20zm3-4.25V24h1.5v-4.25a.75.75 0 10-1.5 0z"
              ></path>
            </svg>
          </Box>
          <Box
            pt={1}
            pl={3}
            sx={{ borderBottom: "1px solid #e0e3eb" }}
            width="100%"
            pb={4}
          >
            Trade
          </Box>
          <Box></Box>
        </Flex>
        <Flex pl={3} pt={4}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="28"
              height="28"
            >
              <path
                fill="currentColor"
                d="M14.05 4.95a.62.62 0 00-.6 0L5.2 9.45a.62.62 0 00.3 1.18H22a.62.62 0 00.3-1.18l-8.25-4.5zm-.3 1.26l5.8 3.17H7.95l5.8-3.17zM8.5 12.75a.75.75 0 00-1.5 0V20h1.5v-7.25zm8 0a.75.75 0 00-1.5 0V20h1.5v-7.25zm3.25-.75c.41 0 .75.34.75.75V20H19v-7.25c0-.41.34-.75.75-.75zm-7.25.75a.75.75 0 00-1.5 0V20h1.5v-7.25zM5 22.25c0-.41.34-.75.75-.75h16a.75.75 0 010 1.5h-16a.75.75 0 01-.75-.75z"
              ></path>
            </svg>
          </Box>
          <Box
            pt={1}
            pl={3}
            sx={{ borderBottom: "1px solid #e0e3eb" }}
            width="100%"
            pb={4}
          >
            Markets
          </Box>
          <Box></Box>
        </Flex>
        <Flex pl={3} pt={4}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="28"
              height="28"
            >
              <path
                fill="currentColor"
                d="M14 5.75a8.25 8.25 0 105.84 14.08.75.75 0 011.06 1.06 9.75 9.75 0 11-.56-14.29l.13-.13a.75.75 0 111.06 1.06l-.54.54a.75.75 0 01-.19.19l-4.96 4.96A2 2 0 0114 16a2 2 0 11.78-3.84l1.65-1.65a4.25 4.25 0 10.55 6.52.75.75 0 011.04 1.08A5.73 5.73 0 018.25 14a5.75 5.75 0 019.25-4.56l1.78-1.78A8.21 8.21 0 0014 5.75z"
              ></path>
            </svg>
          </Box>
          <Box
            pt={1}
            pl={3}
            sx={{ borderBottom: "1px solid #e0e3eb" }}
            width="100%"
            pb={4}
          >
            Screeners
          </Box>
          <Box></Box>
        </Flex>
        <Flex pl={3} pt={4}>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              width="28"
              height="28"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M6 5.5h13c.28 0 .5.22.5.5v14a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6c0-.28.22-.5.5-.5zM4 6c0-1.1.9-2 2-2h13a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm4 4.25a.75.75 0 000 1.5h9a.75.75 0 000-1.5H8zM7.25 14c0-.41.34-.75.75-.75h9a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zM8 16.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8z"
              ></path>
              <path
                fill="currentColor"
                d="M8.06 23.5A2 2 0 0010 25h12a2 2 0 002-2V9a2 2 0 00-1.5-1.94V23a.5.5 0 01-.5.5H8.06z"
              ></path>
            </svg>
          </Box>
          <Box
            pt={1}
            pl={3}
            sx={{ borderBottom: "1px solid #e0e3eb" }}
            width="100%"
            pb={4}
          >
            Community
          </Box>
          <Box></Box>
        </Flex>

        <Flex pl={3} pt={4}>
          <Box
            bg="#e0e3eb"
            sx={{ borderRadius: "5px" }}
            height="25px"
            px={1}
            textAlign="center"
            fontSize="14px"
            pt={1}
          >
            EN
          </Box>
          <Box
            pt={1}
            pl={3}
            sx={{ borderBottom: "1px solid #e0e3eb" }}
            width="100%"
            pb={4}
          >
            English
          </Box>
          <Box></Box>
        </Flex>
      </Flex>
      <Box
        px={["5%", "5%", "5%", "5%", "15%"]}
        width="100%"
        mt={[2, 2, 2, 4, 4]}
        mx={[2, 2, 2, "auto", "auto"]}
      >
        <Flex justifyContent="space-between" mb={[3, 3, 3, 0, 0]}>
          <Box
            onClick={toggleMenu}
            display={["block", "block", "block", "none", "none"]}
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 12h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"></path>
            </svg>
          </Box>
          <Flex mt={1}>
            <Box>
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
            <Box
              display={["none", "none", "none", "block", "block"]}
              bg="#e0e3eb"
              height="20px"
              px={1}
              fontSize="12px"
              pt={1}
              ml={4}
              sx={{ borderRadius: "30%" }}
            >
              EN
            </Box>
          </Flex>
          <Box display={["none", "none", "none", "flex", "flex"]}>
            <Flex bg="#f0f3fa" height="30px" pl={3} className="launch-chart">
              <Box pt="5px">Launch chart</Box>
              <Box ml={2}>
                <svg
                  className="down-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                >
                  <path
                    d="M8.41 12.53a.75.75 0 0 1 1.06-.12L14 16.04l4.53-3.63a.75.75 0 1 1 .94 1.18l-5 4a.75.75 0 0 1-.94 0l-5-4a.75.75 0 0 1-.12-1.06z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Box>
            </Flex>
            <Flex
              bg="#f0f3fa"
              ml={1}
              height="30px"
              className="main-input-wrapper"
            >
              <Box pt="2px" color="#787b86">
                <svg
                  className="search-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  <path
                    d="M17.75 16.69a6.59 6.59 0 1 0-1.06 1.06l3.78 3.78a.75.75 0 1 0 1.06-1.06l-3.78-3.78zm-5.16.99a5.09 5.09 0 1 1 0-10.18 5.09 5.09 0 0 1 0 10.18z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Box>
              <Box width="294px">
                <input className="main-input" placeholder="Symbol, eg. AAPL" />
              </Box>
            </Flex>
          </Box>
          <Flex>
            <Box>
              <svg
                className="profile"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.5 9c0 1.14-.3 1.99-.79 2.54-.46.52-1.27.96-2.71.96s-2.25-.44-2.71-.96A3.74 3.74 0 0 1 10.5 9c0-1.14.3-1.99.79-2.54.46-.52 1.27-.96 2.71-.96s2.25.44 2.71.96c.5.55.79 1.4.79 2.54zM19 9c0 2.76-1.45 5-5 5s-5-2.24-5-5 1.45-5 5-5 5 2.24 5 5zm-8 8.5h6c2.04 0 3.1.5 3.76 1.1.69.63 1.11 1.55 1.5 2.8.13.42.04.95-.29 1.4-.33.46-.8.7-1.22.7H7.25c-.43 0-.89-.24-1.22-.7a1.61 1.61 0 0 1-.3-1.4 6.08 6.08 0 0 1 1.51-2.8c.65-.6 1.72-1.1 3.76-1.1zm6-1.5h-6c-4.6 0-5.88 2.33-6.7 4.96-.58 1.89.97 4.04 2.95 4.04h13.5c1.98 0 3.53-2.15 2.95-4.04C22.88 18.33 21.6 16 17 16z"
                  fill="currentColor"
                ></path>
              </svg>
            </Box>
            <Box
              display={["none", "none", "none", "block", "block"]}
              ml={3}
              bg="#2962ff"
              pt="5px"
              px={2}
              color="white"
              sx={{ borderRadius: "4px", cursor: "pointer" }}
            >
              Start free trial
            </Box>
          </Flex>
        </Flex>

        <Box
          justifyContent="space-between"
          display={["flex", "flex", "flex", "none", "none"]}
          mb={2}
        >
          <Flex
            justifyContent="center"
            bg="#f0f3fa"
            height="30px"
            // px={3}
            pl={2}
            className="launch-chart"
            minWidth="131px"
          >
            <Flex
              pt="5px"
              //   width={["250px", "150px", "150px", "0", "0"]}
            >
              <Box>Launch chart</Box>
            </Flex>
            <Box>
              <svg
                className="down-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="21"
                viewBox="0 0 28 21"
              >
                <path
                  d="M8.41 12.53a.75.75 0 0 1 1.06-.12L14 16.04l4.53-3.63a.75.75 0 1 1 .94 1.18l-5 4a.75.75 0 0 1-.94 0l-5-4a.75.75 0 0 1-.12-1.06z"
                  fill="currentColor"
                ></path>
              </svg>
            </Box>
          </Flex>
          <Flex
            mr="auto"
            width="100%"
            bg="#f0f3fa"
            ml="2px"
            height="30px"
            className="input-wrapper"
          >
            <Box pt="2px" color="#787b86" px={1}>
              <svg
                className="search-logo"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path
                  d="M17.75 16.69a6.59 6.59 0 1 0-1.06 1.06l3.78 3.78a.75.75 0 1 0 1.06-1.06l-3.78-3.78zm-5.16.99a5.09 5.09 0 1 1 0-10.18 5.09 5.09 0 0 1 0 10.18z"
                  fill="currentColor"
                ></path>
              </svg>
            </Box>
            <Flex justifyContent="left">
              <input className="input" placeholder="Symbol, eg. AAPL" />
            </Flex>
          </Flex>
        </Box>

        <Box
          mt={3}
          justifyContent="left"
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Flex mr={3} className="nav-item">
            <Box>
              <svg
                className="chart-icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 6.5h10A2.5 2.5 0 0121.5 9v10a2.5 2.5 0 01-2.5 2.5H9A2.5 2.5 0 016.5 19V9A2.5 2.5 0 019 6.5zM5 9a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H9a4 4 0 01-4-4V9zm14.52 3.54a.75.75 0 10-1.04-1.08l-2.88 2.8-2.82-2.11a.75.75 0 00-.97.06l-3.33 3.25a.75.75 0 001.04 1.08l2.88-2.8 2.82 2.11c.3.22.7.2.97-.06l3.33-3.25z"
                  fill="currentColor"
                ></path>
              </svg>
            </Box>
            <Box pt={1}>Chart</Box>
          </Flex>
          <Box mx={3} pt={1} className="nav-item">
            Trade
          </Box>
          <Box mx={3} pt={1} className="nav-item">
            Markets
          </Box>
          <Box mx={3} pt={1} className="nav-item">
            Screener
          </Box>
          <Box mx={3} pt={1} className="nav-item">
            Community
          </Box>
          <Box mx={3} pt={1} className="nav-item">
            More
          </Box>
        </Box>
      </Box>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  /* .half-black { */
  /* background: rgba(0, 0, 0, 0.5); */
  /* } */

  .opacity {
    background: rgba(0, 0, 0, 0.5);
  }
  .sidebar {
    left: 0;
    top: 0;
    position: fixed;
    z-index: 100;
    overflow-y: scroll;
    opacity: 0;
    /* visibility: hidden; */
    overflow-x: hidden;
    transition: 0.5s;
    width: 0;

    /* transition: margin-left .5s; */
  }

  .active {
    opacity: 1;
    /* visibility: visible; */
    width: 250px;
  }

  border-bottom: 1px #e0e3eb solid;

  .launch-chart {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .main-input {
    border: none;
    outline: none;
    /* width: 294px; */
    /* width: 100%; */
    background: #f0f3fa;
    padding-top: 5px;
  }
  .input {
    border: none;
    outline: none;
    /* width: 294px; */
    width: 100%;
    background: #f0f3fa;
    /* padding-top: 5px; */
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .input-wrapper {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .main-input-wrapper {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  button {
    color: white;
    border: none;
    border-radius: 5px;
    background: #2962ff;
    /* height: 30px; */
    /* padding-top: -5px; */
  }

  .nav-item {
    cursor: pointer;
    /* padding-bottom: 10px; */
    /* padding-top: 5px; */
  }

  .nav-item:hover {
    background: #f0f3fa;
  }
`;

export default Header;
