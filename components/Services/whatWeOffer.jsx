import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";

export default function WhatWeOffer() {
  const listItems = [
      "• Single or three phase Electrical Wiring",
      "• Industrial and process automation",
      "• Building Management System",
      "• HVAC workee phase Electrical Wiring",
      "• Cable laying and termination",
      "• Plumbing works",
      "• Fire Alarm System",
      "• System Integration",
      "• Generator overhauling and repairing",
      "• CCTV",
      "• Access Control System",
      "• Parking Management System",
    ],
    classes = useStyles();
  return (
    <Card className={classes.cardWWoServices}>
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

            <ul className={classes.listWWOServices}>
              {listItems.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
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
