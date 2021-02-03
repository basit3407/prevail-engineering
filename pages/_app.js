import { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/bottom/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS (For Material ui to work)
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Prevail Engineering</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};
export default MyApp;
