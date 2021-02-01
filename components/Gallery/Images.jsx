import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Zoom,
  Dialog,
} from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";
import PropTypes from "prop-types";

export default function Images(props) {
  //Assign CSS
  const classes = useStyles(),
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

  return (
    <Card>
      {isClicked && (
        <ImageDialog
          id={id}
          setisClicked={setisClicked}
          setOpen={setOpen}
          open={open}
        />
      )}
      <Container>
        <Grid container className={classes.gridContainerGallery} spacing={3}>
          {props.array.map((item, index) => {
            return (
              <Grid key={index} item xs={12} md={4}>
                <Paper elevation={3} className={classes.portfolioPaper}>
                  <div className={classes.portfolioWrapper}>
                    <img
                      src={`images/item-${item}.jpg`}
                      alt=""
                      className={classes.portfolioImage}
                    />

                    <div className={classes.portfolioOverlay} />
                    <Button
                      onClick={handleClick}
                      className={classes.portfolioZoom}
                      id={item}
                    >
                      +
                    </Button>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Card>
  );
}

Images.propTypes = {
  array: PropTypes.array.isRequired,
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
        src={`images/item-${id}.jpg`}
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
