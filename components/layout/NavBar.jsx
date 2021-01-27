import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  Grid,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../../styles/materialUI/useStyles";

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const pages = [
    { title: "HOME", href: "/" },
    { title: "ABOUT US", href: "/about" },
    { title: "SERVICES", href: "/services" },
    { title: "GALLERY", href: "/gallery" },
    { title: "CONTACT", href: "/contact" },
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Container>
              <Grid container>
                <Grid item container xs={6}>
                  <img
                    style={{
                      height: matches ? "8vh" : "10vh",
                    }}
                    src="/images/logofinal.png"
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  container
                  direction="row"
                  alignContent="center"
                  justify={matches ? "flex-end" : "center"}
                >
                  <Hidden mdUp>
                    <IconButton edge="end" onClick={handleMenu}>
                      <MenuIcon />
                    </IconButton>

                    <Menu
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      {pages.map((page, index) => {
                        const { title, href } = page;
                        return (
                          <MenuItem key={index}>
                            <LinkComponent title={title} href={href} />
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </Hidden>

                  <Hidden smDown>
                    {pages.map((page, index) => {
                      const { title, href } = page;
                      return (
                        <LinkComponent key={index} title={title} href={href} />
                      );
                    })}
                  </Hidden>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbar} />
    </>
  );
}

const LinkComponent = (props) => {
  const classes = useStyles();
  const { title, href } = props;

  return (
    <Link className={classes.menuLink} href={href}>
      <Typography className={classes.linkTypography} noWrap={true}>
        {title}
      </Typography>
    </Link>
  );
};

LinkComponent.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
