import { useEffect, useState } from "react";
//Load css
import useStyles from "../../styles/materialUI/MuiuseStyles";
//Load propTypes
import PropTypes from "prop-types";
//Load material ui components
import {
  Typography,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
const Animation = (props) => {
  //Assign css
  const classes = useStyles();
  //using media quiries
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  //animation timer progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 60 ? 0 : prevProgress + 10
      );
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Collapse in={props.timer === progress ? true : false} timeout={400}>
      <Typography
        style={{ color: "#0062ae" }}
        className={classes.sliderTypography}
        noWrap={true}
        variant={matches ? "h2" : "h1"}
      >
        {props.component}
      </Typography>
    </Collapse>
  );
};

//proptypes validation
Animation.propTypes = {
  timer: PropTypes.number.isRequired,
  component: PropTypes.string.isRequired,
};

export default Animation;
