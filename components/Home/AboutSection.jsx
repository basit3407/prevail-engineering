//Load material ui components
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Fade,
} from "@material-ui/core";
//Load css
import useStyles from "../../styles/materialUI/MuiuseStyles";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  //Asign css
  const classes = useStyles(),
    //using media queiries
    theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("sm")),
    [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Card className={classes.aboutCard}>
      <Container>
        <Box pt={matches ? "70px" : "150px"} pl={matches ? 0 : "30px"}>
          <Grid container>
            <Fade in={inView} timeout={400}>
              <Grid item ref={ref} sm={12} md={6}>
                <Typography variant="h2" className={classes.aboutHeading}>
                  ABOUT US
                </Typography>
                <Typography variant="body1" className={classes.aboutParagraph}>
                  We are a future oriented, dynamic and fast growing contracting
                  company with a strong focus on delivering excellence in
                  services and support to our valued clients. As per the
                  requirement, we form joint ventures with other reputed
                  consulting firms and clients to provide services in diverse
                  areas. We offer a full spectrum of Electrical, Mechanical and
                  Plumbing solutions to virtually all sectors.
                </Typography>
                <Typography variant="body1" className={classes.aboutParagraph}>
                  <strong>PREVAIL ENGINEERING</strong> is an independent
                  business entity, serving a diversified client base, ranging
                  from cable laying to Building Management Systems, Fire Alarm
                  Systems, CCTV, Telecommunication System, Firefighting System
                  and HVAC Ducting and Chilled Water Piping.
                </Typography>
              </Grid>
            </Fade>
            <Fade in={inView} timeout={800}>
              <Grid item container ref={ref} justify="center" sm={12} md={6}>
                <img
                  className={classes.aboutImage}
                  src="images/aboutside.jpg"
                  alt=""
                />
              </Grid>
            </Fade>
          </Grid>
        </Box>
      </Container>
    </Card>
  );
}
