//Load MaterialUI Components
import { Card, Container, Grid, Typography } from "@material-ui/core";

//Load CSS
import useStyles from "../../styles/materialUI/MuiuseStyles";
import FadeIn from "../FadeIn";
import { ArrayMap } from "../Gallery/Images";

export default function PortfolioSection() {
  //Assign CSS
  const classes = useStyles(),
    array = [
      { number: 1, typography: "Dolmen HVAC Works" },
      { number: 3, typography: "Atrium Mall AHU Controlling" },
      { number: 9, typography: "Atrium Mall AHU Controlling" },
    ];

  //RENDER//
  return (
    <Card className={classes.portfolioCard}>
      <Container>
        <Grid container className={classes.portfolioGrid} spacing={3}>
          <FadeIn timeout={1000}>
            <Grid className={classes.globalGridItem} item xs={12}>
              <Typography className={classes.portfolioHeading} variant="h1">
                GALLERY
              </Typography>
              <Typography variant="body1">
                Our work samples and portfolios
              </Typography>
            </Grid>
          </FadeIn>

          <ArrayMap array={array} />
        </Grid>
      </Container>
    </Card>
  );
}
