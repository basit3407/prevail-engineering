//Load css
import useStyles from "../../styles/materialUI/useStyles";
//Load headings animation
import Animation from "./Animation";
//Load material ui components
import {
  CardMedia,
  Backdrop,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
  Box,
  Zoom,
} from "@material-ui/core";

//Headings to be animated at time intervals

const SliderSection = () => {
  //Assign css
  const classes = useStyles(),
    //using media quiries
    theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("sm")),
    items = [
      { timer: 0, component: "Building Management System" },
      { timer: 10, component: "Fire Alarm System" },
      { timer: 20, component: "CCTV" },
      { timer: 30, component: "Telecommunication System" },
      { timer: 40, component: "Fire Fighting Systems" },
      { timer: 50, component: "HVAC Ducting" },
      { timer: 60, component: "Chilled Water Piping" },
    ];

  return (
    <>
      <CardMedia image="images/slider.jpg" className={classes.media}>
        <Backdrop className={classes.backdrop} open={true} />
        <Grid
          container
          className={classes.containerGrid}
          alignContent="center"
          justify="center"
        >
          <Zoom in={true} mountOnEnter timeout={400}>
            <Grid item xs={12} className={classes.globalGridItem}>
              <Typography
                className={classes.sliderTypography}
                noWrap={true}
                variant={matches ? "h2" : "h1"}
              >
                PREVAIL ENGINEERING
              </Typography>
            </Grid>
          </Zoom>
          <Zoom in={true} mountOnEnter timeout={400}>
            <Grid item xs={12} className={classes.globalGridItem}>
              {items.map((item, index) => {
                return (
                  <Animation
                    key={index}
                    timer={item.timer}
                    component={item.component}
                  />
                );
              })}
            </Grid>
          </Zoom>
          <Zoom mountOnEnter in={true} timeout={400}>
            <Grid item xs={12}>
              <Typography
                noWrap={true}
                className={classes.paragraph}
                variant={matches ? "body1" : "h2"}
              >
                Dynamic and fast growing contracting company <br /> with a
                strong focus on delivering excellentce <br /> in services and
                support to our valued clients
              </Typography>
            </Grid>
          </Zoom>
          <Grid item xs={12} container justify="center">
            <Box py="30px">
              <Zoom mountOnEnter in={true} timeout={400}>
                <Button
                  name="button"
                  href="/services"
                  className={classes.button}
                >
                  <Typography
                    style={{ fontSize: matches ? "0.5rem " : "0.75rem" }}
                    variant="caption"
                  >
                    SERVICES WE OFFER
                  </Typography>
                </Button>
              </Zoom>
            </Box>
          </Grid>
        </Grid>
      </CardMedia>
    </>
  );
};

export default SliderSection;
