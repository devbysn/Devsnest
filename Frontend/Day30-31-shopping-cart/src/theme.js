import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#54436B",
    },
    secondary: {
      main: "#50CB93",
    },
    error: {
      main: "#c0392b",
    },
    background: {
      default: "#F1E9E5",
    },
  },
});

export default theme;
