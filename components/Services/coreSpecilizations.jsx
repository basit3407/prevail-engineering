import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCog,
  faFireExtinguisher,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Card, Grid, Typography, Zoom } from "@material-ui/core";
import useStyles from "../../styles/materialUI/MuiuseStyles";

export default function CoreSpecilizations() {
  const services = [
      {
        trade: "Electrical",
        expertise: [
          "• Lighting installations",
          "• Facade lighting",
          "• Lighting automation solutions, Low voltage (LV) power distribution",
          "• Emergency lighting",
          "• MV power distribution, Power monitoring systems, Soar power solutions and Vertical Transportation Solar power solutions.",
        ],
        icon: faBolt,
      },
      {
        trade: "Heating, Ventilation & AC (HVAC)",
        expertise: [
          "• Central and distributed chilled water systems, underfloor cooling.",
          "• Microclimate control.",
          "• Variable refrigerant flow (VRF), variable air volume (VAV), split air conditioning and ground source energy systems (geothermal).",
        ],
        icon: faCog,
      },
      {
        trade: "Fire Fighting Systems",
        expertise: [
          "• Sprinkler system, CO2, foam, clean agent suppression systems (NOVAC, FM200 and ENERGIN)",
        ],
        icon: faFireExtinguisher,
      },
      {
        trade: "Plumbing, Drainage & Specialist System",
        expertise: [
          "• Water treatment",
          "• Sewage treatment plants (STP's), solar hot water systems and desalination plant",
        ],
        icon: faWrench,
      },
      {
        trade: "Extra-low voltage (ELV) Systems",
        expertise: [
          " • Building management systems (BMS's)",
          "• Fire alarm system",
          "• Intruder alarms",
          "• Access controls",
          "• Closed circuit television (CCTV)",
          "• Intercoms PA Systems",
          "• PA Systems",
        ],
        icon: faSuperpowers,
      },
    ],
    classes = useStyles();
  return (
    <Card className={classes.cardCSServices}>
      <Container className={classes.containerCSServices}>
        <Grid container className={classes.gridContainerCSServices}>
          <Zoom in={true} timeout={400}>
            <Grid item xs={12} className={classes.gridItemCSServices}>
              <Typography variant="h2" className={classes.headingCSServices}>
                CORE SPECIALIZATIONS
              </Typography>
              <Typography className={classes.paraCSServices}>
                Mechanical, Electrical & Plumbing Works
              </Typography>
            </Grid>
          </Zoom>
          {services.map((service, index) => {
            return (
              <Zoom key={index} in={true} timeout={400}>
                <Grid xs={12} md className={classes.gridItemCSServices} item>
                  <FontAwesomeIcon
                    icon={service.icon}
                    spin
                    size="2x"
                    color="#0062ae"
                    fixedWidth
                  ></FontAwesomeIcon>
                  <Typography className={classes.listHeadingCSServices}>
                    {service.trade}
                  </Typography>
                  <ul className={classes.listCSServices}>
                    {service.expertise.map((experty, index) => {
                      return <li key={index}>{experty}</li>;
                    })}
                  </ul>
                </Grid>
              </Zoom>
            );
          })}
        </Grid>
      </Container>
    </Card>
  );
}
