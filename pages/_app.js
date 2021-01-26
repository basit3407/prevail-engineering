import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import NavBar from "../components/layout/NavBar";
import { CssBaseline } from "@material-ui/core";
import Bottom from "../components/layout/Bottom";

function MyApp({ Component, pageProps }) {
  //For animation at page load
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    //Animate at page load
    setAnimation(true);
  }, []);

  const props = {
    ...pageProps,
    animation: animation,
  };

  return (
    <>
      <Head>
        <title>Prevail Engineering</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <CssBaseline />
      <NavBar />
      <Component {...props} />
      <Bottom />;
    </>
  );
}
MyApp.propTypes = {
  pageProps: PropTypes.shape({}).isRequired,
  Component: PropTypes.elementType.isRequired,
};
export default MyApp;
