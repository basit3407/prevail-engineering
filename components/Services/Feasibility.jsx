import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";

export default function Feasibility() {
  const listItems = [
      "• Requirements assessment",
      "• Preliminary investigations",
      "• Development of options and comparative analysis",
      "• Outline designs and cost estimates",
      "• Evaluation of technical and economic feasibility",
    ],
    classes = useStyles();
  return (
    <Card className={classes.cardFeasibilityServices}>
      <Container>
        <Grid container className={classes.gridContainerFeasibilityServices}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              className={classes.headingFeasibilityServices}
            >
              PRE-FEASIBILITY & FEASIBILITY STUDIES
            </Typography>
            <ul className={classes.listCSServices}>
              {listItems.map((item, index) => {
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

          <Grid
            item
            className={classes.gridItemFeasibilityServices}
            xs={12}
            md={8}
          >
            <img
              className={classes.imageFeasibilityServices}
              src="images/laptop-service.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
