import { Card, Grid, Typography, Container, Link } from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Top() {
  const classes = useStyles();
  return (
    <Card className={classes.customNeedsCard}>
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.gridItemAboutTop}>
            <Typography className={classes.headingAboutTop} variant="h1">
              SERVICES
            </Typography>
            <Typography className={classes.iconServicesTop}>
              <Link color="inherit" underline="none" href="/">
                <FontAwesomeIcon color="#fff" icon={faHome} /> Home{" "}
              </Link>
              / Services
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
