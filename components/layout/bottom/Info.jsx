import { Card, Container, Grid, Typography, Link } from "@material-ui/core";
import useStyles from "../../../styles/materialUI/MuiuseStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  const classes = useStyles(),
    date = new Date().getFullYear();
  return (
    <Card>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.gridItemLeftInfo}>
            <Typography variant="caption">
              Copyright: {date} Design and Devloped by{" "}
              <Link
                href="https://basit-minhas.vercel.app/"
                className={classes.infoLink}
              >
                <Typography variant="caption">Basit Minhas</Typography>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridItemRightInfo}>
            <Link
              className={classes.socailLink}
              href="https://www.facebook.com/Prevail-Engineering-100489705098002"
            >
              <FontAwesomeIcon color="#0062ae" icon={faFacebookF} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/prevail-engineering"
              className={classes.socailLink}
            >
              <FontAwesomeIcon color="#0062ae" icon={faLinkedinIn} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
