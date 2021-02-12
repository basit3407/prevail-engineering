import { Card, Container, Grid, Typography, Fade } from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";
import { ArrayMap } from "../Gallery/Images";
import { useInView } from "react-intersection-observer";

export default function PortfolioSection() {
  //Assign CSS
  const classes = useStyles(),
    [ref, inView] = useInView({ triggerOnce: true }),
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
          <Fade in={inView} ref={ref} timeout={2000}>
            <Grid className={classes.globalGridItem} item xs={12}>
              <Typography className={classes.portfolioHeading} variant="h1">
                GALLERY
              </Typography>
              <Typography variant="body1">
                Our work samples and portfolios
              </Typography>
            </Grid>
          </Fade>

          <ArrayMap array={array} />
        </Grid>
      </Container>
    </Card>
  );
}
