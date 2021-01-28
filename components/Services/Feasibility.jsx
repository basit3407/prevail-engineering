import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";

const listItems1 = [
  "• Requirements assessment",
  "• Preliminary investigations",
  "• Development of options and comparative analysis",
  "• Outline designs and cost estimates",
  "• Evaluation of technical and economic feasibility",
];
export default function Feasibility() {
  const classes = useStyles();
  return (
    <Card className={classes.cardFeasibilityServices}>
      <Container>
        <Grid container className={classes.gridContainerFeasibilityServices}>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h2"
              className={classes.headingFeasibilityServices}
              style={{ paddingTop: "40%" }}
            >
              PRE-FEASIBILITY & FEASIBILITY STUDIES
            </Typography>
            <ul className={classes.listCSServices}>
              {listItems1.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <Typography
              variant="h2"
              className={classes.headingFeasibilityServices}
            >
              DESIGN & SCHEDULES
            </Typography>
            <ul className={classes.listCSServices}>
              <li>• Schematic / Preliminary designs and costs</li>
              <li>• Computer simulations</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </Card>
  );
}
