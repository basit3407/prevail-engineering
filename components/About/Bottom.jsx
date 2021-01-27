import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";

export default function Bottom() {
  const classes = useStyles();
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.gridItemAboutBottom}>
          <Container>
            <Typography className={classes.headingAboutBottom} variant="h2">
              OUR MISSION
            </Typography>
            <Typography
              className={classes.paragraphAboutBottom}
              variant="body1"
            >
              Our mission is to provide our clients with engineering solutions
              of value, which shall be achieved through creating successful
              partnerships with our clients by exceeding their expectations
              through exceptional performance by our team- We will continue to
              create and introduce more efficient planning and design procedures
              by incorporating the use of the latest tools and systems as we! as
              the adaptation of the best technology to provide engineering
              solutions best suited to the specific needs of our clients
            </Typography>
          </Container>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Card>
  );
}
