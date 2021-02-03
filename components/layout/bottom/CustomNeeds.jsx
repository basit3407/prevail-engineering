import {
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Zoom,
} from "@material-ui/core";
import useStyles from "../../../styles/materialUI/MuiuseStyles";

export default function CustomNeeds() {
  const classes = useStyles();
  return (
    <Card className={classes.customNeedsCard}>
      <Container>
        <Grid container>
          <Zoom timeout={400} in={true}>
            <Grid item className={classes.customNeedsGridItem}>
              <Typography className={classes.customNeedsHeading} variant="h1">
                CUSTOM NEEDS ?
              </Typography>
              <Typography className={classes.customNeedsPara} variant="body1">
                More than often, our clients will need personalized solutions,
                and this is our speciality, with our expertise we are certain
                your needs and requirements will be met.
              </Typography>
              <Button
                className={classes.customNeedsButton}
                size="large"
                href="/contact"
              >
                <Typography color="inherit" variant="caption">
                  LETS GET STARTED
                </Typography>
              </Button>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Card>
  );
}
