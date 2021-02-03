import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Zoom,
  Dialog,
  Typography,
} from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";
import PropTypes from "prop-types";

export default function Images() {
  //Assign CSS
  const classes = useStyles(),
    imageArray = [];

  for (let index = 1; index < 10; index++) {
    let object = {};
    object["number"] = index;
    object["typography"] = null;
    imageArray.push(object);
  }

  return (
    <Card>
      <Container>
        <Grid container className={classes.gridContainerGallery} spacing={3}>
          <ArrayMap array={imageArray} />
        </Grid>
      </Container>
    </Card>
  );
}

export const ArrayMap = (props) => {
  const classes = useStyles(),
    { array } = props,
    [id, setId] = useState(null),
    [isClicked, setisClicked] = useState(false);

  const handleClick = (event) => {
    const { id } = event.currentTarget;
    setId(id);
    setisClicked(true);
  };

  return (
    <>
      {isClicked && <ImageDialog id={id} setisClicked={setisClicked} />}
      {array.map((item, index) => {
        return (
          <Zoom key={index} timeout={400} in={true}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} className={classes.portfolioPaper}>
                <div className={classes.portfolioWrapper}>
                  <img
                    src={`images/item-${item.number}.jpg`}
                    alt=""
                    className={classes.portfolioImage}
                  />

                  <div className={classes.portfolioOverlay} />
                  <Button
                    onClick={handleClick}
                    className={classes.portfolioZoom}
                    id={item.number}
                  >
                    +
                  </Button>
                </div>
                {item.typography && (
                  <Typography
                    className={classes.portfolioImageCaption}
                    variant="body1"
                  >
                    {item.typography}
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Zoom>
        );
      })}
    </>
  );
};

ArrayMap.propTypes = {
  array: PropTypes.array.isRequired,
};

//Image Dialog
const ImageDialog = (props) => {
  const { id, setisClicked } = props,
    [open, setOpen] = useState(true);

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
  setisClicked: PropTypes.func.isRequired,
};

//Zoom Transition for Image
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom style={props.transition} ref={ref} {...props} />;
});

Transition.propTypes = {
  transition: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired,
};
