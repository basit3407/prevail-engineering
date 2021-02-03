import { Card, Container, Grid, Typography, Zoom } from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";

export default function Bottom() {
  const classes = useStyles();
  return (
    <Card>
      <Grid container>
        <Zoom in={true} timeout={400}>
          <Grid item xs={12} md={4} className={classes.gridItemAboutBottom1}>
            <Container>
              <Typography className={classes.headingAboutBottom} variant="h2">
                Our Mission
              </Typography>
              <Typography
                className={classes.paragraphAboutBottom}
                variant="body1"
              >
                Our mission is to provide our clients with engineering solutions
                of value, which shall be achieved through creating successful
                partnerships with our clients by exceeding their expectations
                through exceptional performance by our team- We will continue to
                create and introduce more efficient planning and design
                procedures by incorporating the use of the latest tools and
                systems as we! as the adaptation of the best technology to
                provide engineering solutions best suited to the specific needs
                of our clients
              </Typography>
            </Container>
          </Grid>
        </Zoom>
        <Zoom in={true} timeout={400}>
          <Grid item xs={12} md={4} className={classes.gridItemAboutBottom2}>
            <Container>
              <Typography className={classes.headingAboutBottom} variant="h2">
                Our Vision
              </Typography>
              <Typography
                className={classes.paragraphAboutBottom}
                variant="body1"
              >
                With the advent of modern day technology, the Internet has
                become the center of all running businesses, with everything
                just a click away. Our design methodology starts with the
                typical Requirement Analysis phase and proceeds with the
                incorporation of traditional and latest design trends. We design
                the most value efficient solutions that combine form, function
                and performance- We aim to provide engineering systems that
                ensure lifetime savings and comfort for the concerned clients
                and users.
              </Typography>
            </Container>
          </Grid>
        </Zoom>
        <Zoom in={true} timeout={400}>
          <Grid item xs={12} md={4} className={classes.gridItemAboutBottom3}>
            <Typography className={classes.headingAboutBottom} variant="h2">
              Our Teams
            </Typography>
            <Typography
              className={classes.paragraphAboutBottom}
              variant="body1"
            >
              Our Team Engineers, technician and draftsmen in our team have
              worked with he leading contractors and Consultants of Pakistan,
              which gives us the diverse and extensive experience required in
              handing and managing client requirements to a high degree of
              success.
            </Typography>
          </Grid>
        </Zoom>
      </Grid>
    </Card>
  );
}
