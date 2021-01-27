import { Card, Grid, Typography, Container } from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";

export default function Top() {
  const classes = useStyles();
  return (
    <Card className={classes.customNeedsCard}>
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.gridItemAboutTop}>
            <Typography className={classes.headingAboutTop} variant="h1">
              ABOUT COMPANY
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
