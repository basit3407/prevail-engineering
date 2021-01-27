import {
  Card,
  Grid,
  Typography,
  Zoom,
  Container,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "../../../styles/materialUI/useStyles";

const imageDesc1 = [
  { number: 1, alt: "Ocean" },
  { number: 2, alt: "Dolmen" },
  { number: 3, alt: "Atrium" },
];
const imageDesc2 = [
  { number: 4, alt: "Maple" },
  { number: 5, alt: "Legends" },
  { number: 6, alt: "Imtiaz" },
];
const imageDesc3 = [{ number: 7, alt: "Ghambat" }];

export default function Slider() {
  const classes = useStyles(),
    theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card className={classes.bottomSliderCard}>
      <Container>
        <Grid container>
          {/* Zoom on out 2 grid items */}
          <Zoom in={true} timeout={400}>
            <Grid item xs={12} className={classes.globalGridItem}>
              <Typography
                className={classes.aboutHeading}
                style={{ padding: "5%" }}
                variant="h1"
              >
                OUR HAPPY CLIENTS
              </Typography>
            </Grid>
          </Zoom>
          <Zoom in={true} timeout={400}>
            <Grid container justify="center" item xs={12}>
              {/* Carousel on inner 3 grid items */}
              <Carousel animation="slide">
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
          </Zoom>
        </Grid>
      </Container>
    </Card>
  );
}
