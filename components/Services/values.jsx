import { Card, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { values } from "../Home/Values";
import { faKeyboard, faNewspaper } from "@fortawesome/free-regular-svg-icons";

export default function Values() {
  const serviceValues = values.map((value) => {
      const returnValue = { ...value };

      switch (returnValue.title) {
        case "Integrity":
          returnValue.icon = faKeyboard;
          break;
        case "Engineering Economics":
          returnValue.icon = faNewspaper;
          break;
      }

      return returnValue;
    }),
    classes = useStyles();
  return (
    <Card className={classes.valuesServicesCard}>
      <Container>
        <Grid container className={classes.portfolioGrid} spacing={3}>
          <Grid item className={classes.globalGridItem} xs={12}>
            <Typography className={classes.portfolioHeading} variant="h1">
              VALUE & SERVICES
            </Typography>
            <Typography variant="body1">
              Our Beliefs and Services we provide to our clients
            </Typography>
          </Grid>

          {serviceValues.map((value, index) => {
            return (
              <Grid
                key={index}
                item
                className={classes.globalGridItem}
                xs={12}
                md={4}
              >
                <FontAwesomeIcon color="#0062ae" size="3x" icon={value.icon} />
                <Typography className={classes.H4ValueServices} variant="h4">
                  {value.title}
                </Typography>
                <Typography className={classes.aboutParagraph}>
                  {value.para}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Card>
  );
}
