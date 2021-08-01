import { makeStyles } from "../../hooks";

export default () =>
  makeStyles(({ palette, boxShadow, typo, shape, spacing }) => ({
    logo: {
      ...typo("h3"),
      fontFamily: "artega-bold",
      color: palette.primary.main,
      marginBottom: spacing(4),
      letterSpacing: 4,
    },
    root: {
      flex: 1,
      backgroundColor: palette.background.default,
      display: "flex",
    },
    registerButtonText: {
      marginTop: spacing(2),
      textAlign: "center",
      textDecorationLine: "underline",
      ...typo("body1"),
    },
    loginButtonText: {
      paddingVertical: spacing(2),
      textAlign: "center",
      color: palette.primary.contrastText,
      ...typo("button"),
    },
    loginButton: {
      borderRadius: shape.borderRadius,
      width: "65%",
      alignSelf: "center",
      marginTop: spacing(4),
      backgroundColor: palette.primary.main,
      ...boxShadow(5),
    },
    addButton: {
      alignSelf: "flex-end",
      position: "absolute",
      top: spacing(2),
      right: spacing(1),
    },
    container: {
      flex: 1,
      backgroundColor: palette.background.default,
      display: "flex",
      justifyContent: "center",
      paddingHorizontal: spacing(5),
    },
    title: {
      fontFamily: "direct-bold",
      marginBottom: spacing(2),
      ...typo("h6"),
    },
    titleCode: {
      fontFamily: "direct-bold",
      position: "absolute",
      top: spacing(19),
      textAlign: "center",
      ...typo("h6"),
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      ...typo("body1"),
    },
    margin: {
      marginTop: 0,
    },
    modal: {
      borderTopLeftRadius: shape.borderRadius * 3,
      borderTopRightRadius: shape.borderRadius * 3,
      overflow: "hidden",
      flex: 1,
      backgroundColor: palette.background.paper,
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: spacing(28),
      paddingVertical: spacing(9),
      paddingHorizontal: spacing(4.5),
    },

    titleModal: {
      fontFamily: "direct-bold",
      textAlign: "center",
      ...typo("h6"),
    },
    subText: {
      fontFamily: "direct-regular",
      textAlign: "center",
      ...typo("subtitle1"),
    },
    modalButtonText: {
      padding: spacing(2),
      textAlign: "center",
      color: "#fff",
    },
    modalButton: {
      borderRadius: shape.borderRadius,
      width: spacing(18),
      alignSelf: "center",
      backgroundColor: palette.primary.main,
    },
    secondaryButtonText: {
      marginTop: spacing(2),
      textAlign: "center",
      textDecorationLine: "underline",
    },
    view: {
      justifyContent: "flex-end",
      margin: 0,
      borderRadius: shape.borderRadius * 3,
      overflow: "hidden",
    },
    containerCode: {
      flex: 1,
      backgroundColor: palette.background.default,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: spacing(28),
    },
    name: {
      fontFamily: "direct-bold",
      fontSize: 20,
      textAlign: "center",
      position: "absolute",
      top: -0.2 * window.height,
    },
  }));
