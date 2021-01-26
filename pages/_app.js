import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import NavBar from "../components/layout/NavBar";
import { CssBaseline } from "@material-ui/core";

function MyApp({ Component, pageProps }) {
  //For animation at page load
  const [animation, setAnimation] = useState(false);
  const props = {
    ...pageProps,
    animation: animation,
    setAnimation: setAnimation,
  };

  useEffect(() => {
    // Remove the server-side injected CSS.
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
      <Component {...props} />;
    </>
  );
}
MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};
export default MyApp;
