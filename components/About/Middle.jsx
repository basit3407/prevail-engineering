import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";

export default function Middle() {
  const classes = useStyles();
  return (
    <Card>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.gridItemMiddleTop}>
            <img
              className={classes.imageAboutMiddle}
              src="images/about-company.jpg"
              alt=""
            ></img>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridItemMiddleTop}>
            <Typography className={classes.headingAboutMiddle} variant="h2">
              WHO WE ARE
            </Typography>
            <Typography
              variant="body1"
              className={classes.paragraphAboutMiddle}
            >
              We are a future oriented, dynamic and fast growing contracting
              company with a strong focus on delivering excellence in services
              and support to our valued clients. As per the requirement, we form
              joint ventures with other reputed consulting firms and clients to
              provide services in diverse areas. We offer a full spectrum of
              Electrical, Mechanical and Plumbing solutions to virtually all
              sectors.
            </Typography>
            <Typography
              variant="body1"
              className={classes.paragraphAboutMiddle}
            >
              PREVAIL ENGINEERING is an independent business entity, serving a
              diversified client base, ranging from cable laying to Building
              Management Systems, Fire Alarm Systems, CCTV, Telecommunication
              System, Firefighting System and HVAC Ducting and Chilled Water
              Piping.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
