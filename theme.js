import { createMuiTheme } from "@material-ui/core/styles";
import window from "./constants/Layout";

const typographyVariants = {
  h1: {
    fontWeight: "300",
    fontSize: 84,
    lineHeight: 98,
    letterSpacing: -1.31208,
  },
  h2: {
    fontWeight: "300",
    fontSize: 60,
    lineHeight: 72,
    letterSpacing: -0.4998,
  },
  h3: {
    fontWeight: "400",
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 0,
  },
  h4: {
    fontWeight: "400",
    fontSize: 34,
    lineHeight: 42,
    letterSpacing: 0.25,
  },
  h5: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  h6: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  body1: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  body2: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  button: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24.5,
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  caption: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  overline: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 32,
    letterSpacing: 0.1,
    textTransform: "uppercase",
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8444ff",
      main: "#3d00f7",
      dark: "#0000c2",
    },
  },
  spacing: 0.02 * window.width,
  shape: {
    borderRadius: 0.015 * window.width,
  },
  boxShadow: (depth) =>
    depth > 0
      ? {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1 + Math.floor((depth - 2) / 2),
          },
          shadowOpacity: parseFloat((0.18 + (depth - 1) * 0.0176).toFixed(2)),
          shadowRadius: parseFloat((1 + (depth - 1) * 0.652).toFixed(2)),
          elevation: depth,
        }
      : {},
  typo: (variant, weight) => ({
    ...typographyVariants[variant],
    ...(weight ? { fontWeight: weight } : {}),
  }),
});

delete theme.mixins;
delete theme.breakpoints;
delete theme.overrides;
delete theme.zIndex;
delete theme.typography;
delete theme.transitions;
delete theme.direction;
delete theme.shadows;

export default theme;
