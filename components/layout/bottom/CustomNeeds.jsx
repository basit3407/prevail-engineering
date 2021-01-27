import {
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Zoom,
} from "@material-ui/core";
import useStyles from "../../../styles/materialUI/useStyles";

export default function CustomNeeds() {
  const classes = useStyles();
  return (
    <Card className={classes.customNeedsCard}>
      <Container>
        <Grid container>
          <Zoom timeout={400} in={true}>
            <Grid
              item
              className={classes.globalGridItem}
              style={{ padding: "5%" }}
            >
              <Typography className={classes.customNeedsHeading} variant="h1">
                CUSTOM NEEDS ?
              </Typography>
              <Typography
                style={{
                  padding: "3%",
                }}
                variant="body1"
              >
                More than often, our clients will need personalized solutions,
                and this is our speciality, with our expertise we are certain
                your needs and requirements will be met.
              </Typography>
              <Button
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 0,
                  padding: "1.5% 3%",
                }}
                size="large"
                href="/contact"
              >
                <Typography style={{ color: "#0062ae" }} variant="caption">
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
