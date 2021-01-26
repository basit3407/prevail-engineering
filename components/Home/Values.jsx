//Load propTypes
import PropTypes from "prop-types";
//Load MaterialUI Components
import { Card, Container, Grid, Zoom, Typography } from "@material-ui/core";
//Load css
import useStyles from "../../styles/materialUI/useStyles";
//load fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

export default function Values(props) {
  // For Loading animation on page load
  const { animation } = props,
    // Assign css
    classes = useStyles();
  return (
    <Card className={classes.valuesCard}>
      <Container>
        <Grid container className={classes.portfolioGrid} spacing={7}>
          <Zoom in={animation} timeout={400}>
            <Grid item style={{ textAlign: "center" }} xs={12}>
              <Typography className={classes.portfolioHeading} variant="h1">
                VALUE & SERVICES
              </Typography>
              <Typography variant="body1">
                Our Beliefs and Services we provide to our clients
              </Typography>
            </Grid>
          </Zoom>
          <Zoom in={animation} timeout={400}>
            <Grid item container xs={12} md={4}>
              <Grid item xs={4} style={{ paddingRight: "25px" }}>
                <div className={classes.valuesIconDiv}>
                  <FontAwesomeIcon
                    className={classes.valuesIcon}
                    size="5x"
                    icon={faFlask}
                  />
                </div>
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.valuesH4} variant="h4">
                  Integrity
                </Typography>
                <Typography className={classes.aboutParagraph} variant="body1">
                  We remain honest with our clients and profession, and persist
                  in giving our best effort in every single task that we take
                  up.
                </Typography>
              </Grid>
            </Grid>
          </Zoom>
          <Zoom in={animation} timeout={400}>
            <Grid item container xs={12} md={4}>
              <Grid item xs={4} style={{ paddingRight: "25px" }}>
                <div className={classes.valuesIconDiv}>
                  <FontAwesomeIcon
                    className={classes.valuesIcon}
                    size="5x"
                    icon={faLightbulb}
                  />
                </div>
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.valuesH4} variant="h4">
                  Engineering Economics
                </Typography>
                <Typography className={classes.aboutParagraph} variant="body1">
                  We provide engineering solutions that are economical,fully
                  energy efficient and tailored to fit our client&apos;s need.
                </Typography>
              </Grid>
            </Grid>
          </Zoom>
          <Zoom in={animation} timeout={400}>
            <Grid item container xs={12} md={4}>
              <Grid item xs={4} style={{ paddingRight: "25px" }}>
                <div className={classes.valuesIconDiv}>
                  <FontAwesomeIcon
                    className={classes.valuesIcon}
                    size="5x"
                    icon={faLightbulb}
                  />
                </div>
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.valuesH4} variant="h4">
                  Innovation
                </Typography>
                <Typography className={classes.aboutParagraph} variant="body1">
                  We keep introducing and applying new ideas and technologies to
                  our practice, in order to keep pace with the latest market
                  trend
                </Typography>
              </Grid>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Card>
  );
}

Values.propTypes = {
  animation: PropTypes.bool.isRequired,
};
