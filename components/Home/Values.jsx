//Load MaterialUI Components
import { Card, Container, Grid, Typography } from "@material-ui/core";
//Load css
import useStyles from "../../styles/materialUI/MuiuseStyles";
//load fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

export const values = [
  {
    title: "Integrity",
    para:
      "We remain honest with our clients and profession, and persist in giving our best effort in every single task that we take up.",
    icon: faFlask,
  },
  {
    title: "Engineering Economics",
    para:
      "We provide engineering solutions that are economical,fully energy efficient and tailored to fit our client's need.",
    icon: faLightbulb,
  },
  {
    title: "Innovation",
    para:
      "We keep introducing and applying new ideas and technologies to our practice, in order to keep pace with the latest market trend.",
    icon: faLightbulb,
  },
];

export default function Values() {
  // Assign css
  const classes = useStyles();
  return (
    <Card className={classes.valuesCard}>
      <Container>
        <Grid container className={classes.portfolioGrid} spacing={7}>
          <Grid item className={classes.globalGridItem} xs={12}>
            <Typography className={classes.portfolioHeading} variant="h1">
              VALUE & SERVICES
            </Typography>
            <Typography variant="body1">
              Our Beliefs and Services we provide to our clients
            </Typography>
          </Grid>

          {values.map((value, index) => {
            return (
              <Grid key={index} container item xs={12} md={4}>
                <Grid item xs={4} className={classes.valuesGridItems}>
                  <div className={classes.valuesIconDiv}>
                    <FontAwesomeIcon
                      className={classes.valuesIcon}
                      size="5x"
                      icon={value.icon}
                    />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <Typography className={classes.valuesH4} variant="h4">
                    {value.title}
                  </Typography>
                  <Typography className={classes.aboutParagraph}>
                    {value.para}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Card>
  );
}
