import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "../../styles/materialUI/useStyles";

const array = [
  {
    text: [
      "1Flat No.401, Block B, Plot 187, Iqra Complex, Gulistan e Johar, Karachi Pakistan",
    ],
    icon: faMapMarker,
  },

  {
    text: [
      "basit@prevaileng.com",

      "rameez@prevaileng.com",

      "basit.prevail@gmail.com",

      "rameez.prevail@gmail.com",

      "engineers.prevail@gmail.com",
    ],
    icon: faEnvelope,
  },
  {
    text: [
      "| + 92-332-2273086 |",

      "| +92-300-2631368 |",

      "| +92-313-2899040 |",
    ],
    icon: faPhone,
  },
];

export default function Middle() {
  const classes = useStyles();
  return (
    <>
      <Card>
        <Container>
          <Grid container spacing={3} className={classes.gridContainerContact}>
            <Grid item xs={12} md={6}>
              <Typography className={classes.headingContact} variant="h2">
                CONTACT US
              </Typography>
              <Typography>
                Write your query or review below with your details. Our
                representative will contact you regarding your query. Thank you
                in advance for approaching us !
              </Typography>

              <TextField
                size="small"
                variant="outlined"
                placeholder="Your Name"
                margin="normal"
                fullWidth
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Your Email"
                margin="normal"
                fullWidth
              />
              <TextField
                size="small"
                variant="outlined"
                placeholder="Subject"
                margin="normal"
                fullWidth
              />
              <TextField
                variant="outlined"
                placeholder="Message"
                margin="normal"
                rows="5"
                multiline
                fullWidth
              />
              <Button
                style={{
                  backgroundColor: "#0062ae",
                  borderRadius: 0,
                  textTransform: "none",
                }}
                variant="contained"
                color="primary"
              >
                <Typography style={{ padding: "5% 0" }} variant="caption">
                  Send Message
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.headingContact} variant="h2">
                FIND US
              </Typography>
              <Typography>You can find us on the location below</Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.626973111997!2d67.11917601460627!3d24.91070258403026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e1b61c4f45%3A0x7f78c1c4619d33bd!2sIqra%20Complex!5e0!3m2!1sen!2sus!4v1612175645793!5m2!1sen!2sus"
                width="600"
                height="450"
                frameBorder="0"
                allowFullScreen=""
                style={{ paddingTop: "5%", width: "100%" }}
                aria-hidden="false"
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex="0"
                title="map"
              ></iframe>
            </Grid>
            {array.map((item, index) => {
              return (
                <Grid key={index} item xs={12} md={4}>
                  <Paper className={classes.paperContact} elevation={0}>
                    <FontAwesomeIcon
                      size="2x"
                      icon={item.icon}
                      color="#0062ae"
                    />
                    {item.text.map((item, index) => {
                      return <Typography key={index}>{item}</Typography>;
                    })}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Card>
    </>
  );
}
