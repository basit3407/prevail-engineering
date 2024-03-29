import {
  Card,
  Grid,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "../../../styles/materialUI/MuiuseStyles";

export default function Slider() {
  const classes = useStyles(),
    theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("sm")),
    imageDesc1 = [
      { number: 1, alt: "Ocean" },
      { number: 2, alt: "Dolmen" },
      { number: 3, alt: "Atrium" },
    ],
    imageDesc2 = [
      { number: 4, alt: "Maple" },
      { number: 5, alt: "Legends" },
      { number: 6, alt: "Imtiaz" },
    ],
    imageDesc3 = [{ number: 7, alt: "Ghambat" }];

  return (
    <Card className={classes.bottomSliderCard}>
      <Container>
        <Grid container>
          {/* Zoom on out 2 grid items */}

          <Grid item xs={12} className={classes.globalGridItem}>
            <Typography className={classes.bottomSliderHeading} variant="h1">
              OUR HAPPY CLIENTS
            </Typography>
            <Typography className={classes.bottomSliderPara} variant="body1">
              Pakistan&apos;s Famous Brands and Companies are our satisfied
              clients
            </Typography>
          </Grid>

          <Grid container justify="center" item xs={12}>
            {/* Carousel on inner 3 grid items */}
            <Carousel timeout={400} animation="slide">
              <Grid container item spacing={matches ? 0 : 7}>
                {imageDesc1.map((image, index) => {
                  const { number, alt } = image;
                  return (
                    <Grid
                      key={index}
                      xs={12}
                      md={4}
                      item
                      className={classes.globalGridItem}
                    >
                      <img src={`images/logo-${number}.jpg`} alt={alt}></img>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item container spacing={matches ? 0 : 7}>
                {imageDesc2.map((image, index) => {
                  const { number, alt } = image;
                  return (
                    <Grid
                      key={index}
                      className={classes.globalGridItem}
                      xs={12}
                      md={4}
                      item
                    >
                      <img src={`images/logo-${number}.jpg`} alt={alt}></img>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid container item spacing={matches ? 0 : 7}>
                {imageDesc3.map((image, index) => {
                  const { number, alt } = image;
                  return (
                    <Grid
                      key={index}
                      xs={12}
                      md={4}
                      className={classes.globalGridItem}
                      item
                    >
                      <img src={`images/logo-${number}.jpg`} alt={alt}></img>
                    </Grid>
                  );
                })}
              </Grid>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
