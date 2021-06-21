import "../styles/globals.css";
import Header from "components/Header";
import Banner from "components/Banner";

import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Banner />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
