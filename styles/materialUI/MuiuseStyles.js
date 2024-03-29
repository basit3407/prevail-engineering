import { makeStyles } from "@material-ui/core/styles";

//For drop shadow
let array = [];
for (let i = 1; i < 101; i++) {
  const element = `drop-shadow(${i}px ${i}px #0e96ff)`;
  array.push(element);
}

const useStyles = makeStyles(
  (theme) => ({
    //GLOBAL //
    //Grid items text align
    globalGridItem: {
      textAlign: "center",
    },

    //NAV BAR SECTION//
    //Toolabar css
    toolbar: {
      backgroundColor: "#ffff",
      height: "10vh",
    },

    //Menu css
    menuLink: {
      marginRight: theme.spacing(3),
      color: "#444",
      "&:hover": {
        color: "#0062ae",
        textDecoration: "none",
      },
    },

    //Links css
    linkTypography: {
      fontWeight: 500,
      borderBottom: "2px solid transparent",
    },

    //HOME PAGE TOP SECTION

    //card media css
    media: {
      height: "90vh",
      backgroundAttachment: "fixed",
      position: "relative",
      color: "#fff",
      zIndex: 2,
      boxShadow: " 0 0 8px rgba(0, 0, 0, 0.3)",
    },

    //backdrop css
    backdrop: {
      backgroundColor: "rgba(255,255,255,0.78)",
      filter: "blur(8px)",
      position: "absolute",
    },

    //Slider headings css
    sliderTypography: {
      fontSize: "2.5rem",
      color: "#333",
      fontWeight: 700,
      marginBottom: "0.9375rem",

      [theme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },

    //paragraph css
    paragraph: {
      fontSize: "1.5rem",
      color: "#666",
      textAlign: "center",
      fontWeight: 400,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
    },

    // main grid css
    containerGrid: {
      zIndex: 2,
      position: "absolute",
      height: "100%",
    },

    //button css
    button: {
      [theme.breakpoints.down("sm")]: {
        padding: "8px",
      },
      padding: "20px 35px",
      color: "#fff",
      backgroundColor: "#414141",
      textAlign: "center",
      "&:hover": {
        backgroundColor: "#414141",
      },
    },

    //HOME PAGE ABOUT SECTION //
    //Card CSS
    aboutCard: {
      height: "100vh",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "150vh",
      },
    },

    aboutGrid: {
      height: "100%",
      position: "absolute",
    },
    //heading CSS
    aboutHeading: {
      fontSize: "1.5rem",
      fontWeight: 600,
      marginBottom: 30,
    },

    //paragraph CSS
    aboutParagraph: {
      fontWeight: 300,
      color: "#727272",
      marginBottom: 35,
    },

    //image CSS
    aboutImage: {
      height: "30%",
      [theme.breakpoints.down("sm")]: {
        height: "20%",
      },
    },

    //HOME PAGE PORTFOLIO SECTION //
    //portfolio card css
    portfolioCard: {
      position: "relative",
      backgroundColor: "#FCFCFC",
      [theme.breakpoints.up("md")]: {
        height: "100vh",
      },
    },
    //portfolio container grid css
    portfolioGrid: {
      padding: "80px 0",
    },

    // portfolio Heading css
    portfolioHeading: {
      fontSize: "2rem",
      fontWeight: 300,
      color: "#333",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },
    //portfolioPaper
    portfolioPaper: {
      "&:hover": {
        "& $portfolioOverlay": {
          opacity: 1,
          background: "rgba(0, 0, 0, 0.7)",
        },
        "& $portfolioImage": {
          transform: `scale3d(1.2,1.2,1)`,
        },
        "& $portfolioZoom": {
          transform: "scale3d(1,1,1)",
        },
      },
    },

    //portfolio Wrapper Div css
    portfolioWrapper: {
      position: "relative",
      overflow: "hidden",
    },
    //portfolio Images css
    portfolioImage: {
      width: "100%",
      transition: "transform 400ms",
    },
    portfolioImageCaption: {
      textAlign: "center",
      padding: "20px 25px",
    },

    //overlay css
    portfolioOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      transition: "opacity 400ms",
      width: "100%",
      height: "100%",
      textAlign: "center",
      "&:hover": {
        "& $portfolioZoom": {
          transform: "scale3d(1,1,1)",
        },
      },
    },

    //Portfolio Zoom
    portfolioZoom: {
      display: "inline-block",
      color: "#fff",
      padding: "10px 23px",
      border: "1px solid",
      borderRadius: 0,
      margin: "4px",
      transform: "scale3d(0,0,0)",
      transition: "transform 400ms",
      position: "absolute",
      top: "35%",
      left: "40%",
      "&:hover": {
        color: "#fff",
      },
    },

    //HOME PAGE VALUES SECTION

    //Card css
    valuesCard: {
      position: "relative",
    },
    valuesIconDiv: {
      backgroundColor: "#0062ae",
      borderRadius: "50%",
      height: "100px",
      width: "100px",
      textAlign: "center",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        height: "85px",
        width: "85px",
      },
    },
    valuesIcon: {
      color: " #fff",
      paddingTop: "20%",
      WebkitFilter: array.join(" "),
      filter: array.join(" "),
    },
    valuesH4: {
      fontWeight: 400,
      fontSize: "1.125rem",
      color: "#333",
      lineHeight: 1.1,
      paddingBottom: "2%",
    },
    valuesGridItems: {
      paddingRight: "25px",
    },

    //BOTTOM SECTION
    //slider section css

    bottomSliderCard: {
      position: "relative",
      backgroundColor: "#FCFCFC",
      padding: "5% 5% 2%",
    },

    bottomSliderHeading: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    bottomSliderPara: {
      padding: "2% 5% 5%",
    },

    //custom needs section css
    customNeedsCard: {
      backgroundColor: "#0062ae",
      color: "#fff",
    },
    customNeedsHeading: {
      color: "inherit",
      fontSize: "26px",
      fontWeight: 300,
      marginBottom: "15px",
    },
    customNeedsGridItem: {
      textAlign: "center",
      padding: "5%",
    },
    customNeedsPara: {
      fontSize: "15px",
      fontWeight: 300,
      MarginTop: "20px",
    },
    customNeedsButton: {
      backgroundColor: "#fff",
      borderRadius: 0,
      padding: "16px 35px",
      fontSize: "12px",
      marginTop: "20px",
      letterSpacing: "2px",
      color: "#0062ae",
      "&:hover": {
        backgroundColor: "#fff",
      },
    },

    //info section css
    infoLink: {
      color: "#0062ae",

      "&:hover": {
        color: "#0062ae",
        textDecoration: "none",
      },
    },
    gridItemRightInfo: {
      padding: "2% 0",
      textAlign: "right",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    gridItemLeftInfo: {
      padding: "2% 0",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    socailLink: {
      padding: "0 1%",
    },

    //ABOUT PAGE //
    //Top Section

    gridItemAboutTop: {
      textAlign: "center",
      padding: "5% 0",
    },
    headingAboutTop: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "#fff",
    },
    iconAboutTop: {
      paddingRight: "7%",
      paddingTop: "1%",
      [theme.breakpoints.down("sm")]: {
        paddingRight: "25%",
      },
    },

    //Middle section
    imageAboutMiddle: {
      height: "100%",
      width: "100%",
    },

    gridItemMiddleTop: {
      padding: "5% 0",
    },
    headingAboutMiddle: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "18px",
      padding: "0 5%",
    },
    paragraphAboutMiddle: {
      padding: "0 5% 1% 5%",
    },

    //Bottom section
    gridItemAboutBottom1: {
      backgroundColor: "#0062ae",
    },
    gridItemAboutBottom2: {
      backgroundColor: "#007fe2",
    },
    gridItemAboutBottom3: {
      backgroundColor: "#00487f",
    },
    headingAboutBottom: {
      padding: "15% 10% 1%",
      color: "#fff",
      fontSize: "24px",
      fontWeight: 600,
    },
    paragraphAboutBottom: {
      color: "#fff",
      padding: "0 10% 10%",
    },

    //SERVICES SECTION //
    //Top
    iconServicesTop: {
      paddingTop: "1%",
    },

    //What we offer
    cardWWoServices: {
      boxShadow: "none",
    },

    gridItemWWOServices: {
      padding: "5%",
    },
    headingWWOServices: {
      fontSize: "1.5rem",
      fontWeight: 600,
      paddingBottom: "3%",
    },
    paraWWOServices: {
      paddingBottom: "3%",
    },
    listHeadingWWPServices: {
      fontSize: "1.2rem",
      paddingTop: "5%",
    },
    listWWOServices: {
      listStyle: "none",
      padding: 0,
      fontSize: "1rem",
    },
    imageWWOServices: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },

    //Core specializations
    cardCSServices: {
      boxShadow: "none",
    },
    containerCSServices: {
      backgroundColor: "#FCFCFC",
      marginTop: "5%",
    },
    gridContainerCSServices: {
      padding: "0 5%",
    },
    gridItemCSServices: {
      padding: "1% 3%",
      textAlign: "center",
    },

    headingCSServices: {
      fontSize: "1.5rem",
      fontWeight: 600,
      padding: "7% 0 1%",
    },
    paraCSServices: {
      paddingBottom: "1%",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "5%",
      },
    },
    listHeadingCSServices: {
      fontSize: "1.1rem",
      paddingTop: "10%",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "5%",
      },
    },
    listCSServices: {
      listStyle: "none",
      padding: 0,
      fontSize: "0.875rem",
    },

    //value\
    valuesServicesCard: {
      boxShadow: "none",
    },
    H4ValueServices: {
      fontWeight: 400,
      fontSize: "1.125rem",
      color: "#333",
      lineHeight: 1.1,
      padding: "3% 0 2%",
    },

    //Feasibility
    gridContainerFeasibilityServices: {
      padding: "5%",
    },
    gridItemFeasibilityServices: {
      position: "relative",
    },

    cardFeasibilityServices: {
      boxShadow: "none",
      backgroundColor: "#FCFCFC",
    },

    headingFeasibilityServices: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    imageFeasibilityServices: {
      width: "100%",
    },

    //GALLERY PAGE //
    //images
    gridContainerGallery: {
      padding: "7%",
    },

    //CONTACT//
    gridContainerContact: {
      padding: "7% 3%",
    },
    headingContact: {
      fontWeight: 600,
      fontSize: "1.5rem",
      padding: "10% 0 3%",
    },
    buttonContact: {
      backgroundColor: "#0062ae",
      borderRadius: 0,
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#0062ae",
      },
    },
    contactButtoTypo: {
      padding: "5% 0",
    },
    paperContact: {
      backgroundColor: "#F7F7F7",
      textAlign: "center",
      padding: "10%",
      marginBottom: "10%",
      width: "100%",
    },
    iframe: {
      paddingTop: "5%",
      width: "100%",
    },
    contactPaperIcon: {
      margin: "2% 0",
    },
    contactPaperTypo: {
      padding: "1%",
    },
  }),
  { index: 1 }
);

export default useStyles;
