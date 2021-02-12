import { Fade } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

export default function FadeIn(props) {
  const { children, timeout } = props,
    [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Fade in={inView} timeout={timeout}>
      <div ref={ref}>{children}</div>
    </Fade>
  );
}

FadeIn.propTypes = {
  children: PropTypes.element.isRequired,
  timeout: PropTypes.number.isRequired,
};
