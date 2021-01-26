import { Card, Grid, Slide } from "@material-ui/core";
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
  const classes = useStyles();

  return (
    <Card className={classes.valuesCard}>
      <Slide>
        <Grid container>
          {imageDesc1.map((image, index) => {
            const { number, alt } = image;
            return (
              <Grid key={index} xs={12} md={4} item>
                <img src={`images/logo-${number}.jpg`} alt={alt}></img>
              </Grid>
            );
          })}
        </Grid>
      </Slide>
      <Grid container>
        {imageDesc2.map((image, index) => {
          const { number, alt } = image;
          return (
            <Grid key={index} xs={12} md={4} item>
              <img src={`images/logo-${number}.jpg`} alt={alt}></img>
            </Grid>
          );
        })}
      </Grid>
      <Grid container>
        {imageDesc3.map((image, index) => {
          const { number, alt } = image;
          return (
            <Grid key={index} xs={12} md={4} item>
              <img src={`images/logo-${number}.jpg`} alt={alt}></img>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
}
