import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";

export default function WhatWeOffer() {
  const classes = useStyles();
  return (
    <Card>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.gridItemWWOServices}>
            <Typography variant="h2" className={classes.headingWWOServices}>
              WHAT WE OFFER
            </Typography>
            <Typography className={classes.paraWWOServices}>
              We offer clients a unique, collaborative approach that is tailored
              to suit individual needs. We have a team that has successfully
              delivered a number of projects and have a vast experience in MEP
              Commissioning. We have a proven reputation for delivering complex
              projects with quality workmanship, in a professional and timely
              manner. Prevail Engineering has a qualified and experienced
              in&apos;house design and engineering team to provide clients with
              the design-and- build capability for all MEP components on major
              buildings.
            </Typography>
            <Typography className={classes.listHeadingWWOServices}>
              Specialized In:
            </Typography>
            <Typography>
              <ul className={classes.listWWOServices}>
                <li>• Single or three phase Electrical Wiring</li>
                <li>• Industrial and process automation</li>
                <li>• Building Management System</li>
                <li>• HVAC workee phase Electrical Wiring</li>
                <li>• Cable laying and termination</li>
                <li>• Plumbing works</li>
                <li>• Fire Alarm System</li>
                <li>• System Integration</li>
                <li>• Generator overhauling and repairing</li>
                <li>• CCTV</li>
                <li>• Access Control System</li>
                <li>• Parking Management System</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridItemWWOServices}>
            <img
              src="images/team.jpg"
              alt=""
              className={classes.imageWWOServices}
            />
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
