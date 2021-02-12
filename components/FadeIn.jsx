import { Fade } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { cloneElement, Children, isValidElement } from "react";

export default function FadeIn(props) {
  const { children, timeout } = props,
    [ref, inView] = useInView({ triggerOnce: true }),
    childrenWithRef = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement((child, { ref: ref }));
      }
    });

  return (
    <Fade in={inView} timeout={timeout}>
      {childrenWithRef}
    </Fade>
  );
}

FadeIn.propTypes = {
  children: PropTypes.element.isRequired,
  timeout: PropTypes.number.isRequired,
};
