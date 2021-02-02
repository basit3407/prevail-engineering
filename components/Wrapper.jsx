import PropTypes from "prop-types";
import Footer from "./layout/bottom/Footer";
import NavBar from "./layout/NavBar";

export default function Wrapper(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />;
    </>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
