import React, { useState } from "react";

//Load MaterialUI Components
import {
  Card,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Dialog,
  Zoom,
} from "@material-ui/core";
//Load propTypes
import PropTypes from "prop-types";
//Load CSS
import useStyles from "../../styles/materialUI/useStyles";

export default function PortfolioSection(props) {
  //Assign CSS
  const classes = useStyles(),
    //animation on first page load
    { animation } = props,
    //STATES
    //click on picture
    [isClicked, setisClicked] = useState(false),
    //open dialog with zoomed picture
    [open, setOpen] = useState(false),
    //Button element clicked
    [id, setId] = useState(null);

  //ACTIONS //
  //Click on Pictures
  const handleClick = (event) => {
    const { id } = event.currentTarget;
    setId(id);
    setOpen(true);
    setisClicked(true);
  };

  //RENDER//
  return (
    <Card className={classes.portfolioCard}>
      {isClicked && (
        <ImageDialog
          id={id}
          setisClicked={setisClicked}
          setOpen={setOpen}
          open={open}
        />
      )}
      <Container>
        <Grid container className={classes.portfolioGrid} spacing={3}>
          <Zoom in={animation} timeout={400}>
            <Grid item style={{ textAlign: "center" }} xs={12}>
              <Typography className={classes.portfolioHeading} variant="h1">
                GALLERY
              </Typography>
              <Typography variant="body1">
                Our work samples and portfolios
              </Typography>
            </Grid>
          </Zoom>
          <Zoom in={animation} timeout={400}>
            <Grid item sm={12} md={4}>
              <Paper elevation={3} className={classes.portfolioPaper}>
                <div className={classes.portfolioWrapper}>
                  <img
                    src="images/item-1.jpg"
                    alt=""
                    className={classes.portfolioImage}
                  />
                  <div className={classes.portfolioOverlay}>
                    <Button
                      onClick={handleClick}
                      className={classes.portfolioZoom}
                      underline="none"
                      id="dolmen"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Typography
                  className={classes.portfolioImageCaption}
                  variant="body1"
                >
                  Dolmen HVAC works
                </Typography>
              </Paper>
            </Grid>
          </Zoom>
          <Zoom in={animation} timeout={400}>
            <Grid item sm={12} md={4}>
              <Paper elevation={3} className={classes.portfolioPaper}>
                <div className={classes.portfolioWrapper}>
                  <img
                    src="images/item-3.jpg"
                    alt=""
                    className={classes.portfolioImage}
                  />
                  <div className={classes.portfolioOverlay}>
                    <Button
                      onClick={handleClick}
                      className={classes.portfolioZoom}
                      underline="none"
                      id="atrium"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Typography
                  className={classes.portfolioImageCaption}
                  variant="body1"
                >
                  Atrium Mall AHU Controlling
                </Typography>
              </Paper>
            </Grid>
          </Zoom>
          <Zoom in={animation} timeout={400}>
            <Grid item sm={12} md={4}>
              <Paper className={classes.portfolioPaper} elevation={3}>
                <div className={classes.portfolioWrapper}>
                  <img
                    src="images/item-9.jpg"
                    alt=""
                    className={classes.portfolioImage}
                  />
                  <div className={classes.portfolioOverlay}>
                    <Button
                      onClick={handleClick}
                      className={classes.portfolioZoom}
                      underline="none"
                      id="ocean"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Typography
                  className={classes.portfolioImageCaption}
                  variant="body1"
                >
                  Ocean Mall BMS
                </Typography>
              </Paper>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Card>
  );
}
PortfolioSection.propTypes = {
  animation: PropTypes.bool.isRequired,
};

//Image Dialog
const ImageDialog = (props) => {
  const { id, open, setisClicked, setOpen } = props;

  //get coordinates of the clicked picture button for transform origin
  const coordinates = document.getElementById(id).getBoundingClientRect(),
    centreX = coordinates.x + (coordinates.right - coordinates.x) / 2,
    centreY = coordinates.y + (coordinates.bottom - coordinates.y) / 2;

  const style = {
    transition: {
      transformOrigin: `${centreX}px ${centreY}px`,
    },
  };

  let img;

  switch (id) {
    case "dolmen":
      img = 1;

      break;
    case "atrium":
      img = 3;

      break;
    case "ocean":
      img = 9;

      break;
    default:
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      onExited={() => {
        setisClicked(false);
      }}
      transitionDuration={1000}
      TransitionProps={style}
    >
      <img
        src={`images/item-${img}.jpg`}
        style={{ width: "100%", height: "100%" }}
        alt=""
      />
    </Dialog>
  );
};

ImageDialog.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setisClicked: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};

//Zoom Transition for Image
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom style={props.transition} ref={ref} {...props} />;
});

Transition.propTypes = {
  transition: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired,
};
