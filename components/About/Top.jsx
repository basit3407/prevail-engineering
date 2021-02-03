import { Card, Grid, Typography, Container, Link } from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";
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
              ABOUT COMPANY
            </Typography>
            <Typography className={classes.iconAboutTop}>
              <Link color="inherit" underline="none" href="/">
                <FontAwesomeIcon color="#fff" icon={faHome} /> Home{" "}
              </Link>
              / About
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
