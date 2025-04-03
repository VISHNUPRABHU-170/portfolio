import MatButton from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "./Button.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
});

export default function Button({ label, link, variant }) {
  if (variant === "outlined") {
    return (
      <ThemeProvider theme={theme}>
        <Link to={link} className="button-link">
          <MatButton variant="outlined" color="primary">
            {label}
          </MatButton>
        </Link>
      </ThemeProvider>
    );
  } else if (variant === "contained") {
    return (
      <ThemeProvider theme={theme}>
        <Link to={link} className="button-link">
          <MatButton variant="contained" color="primary">
            {label}
          </MatButton>
        </Link>
      </ThemeProvider>
    );
  } else if (variant === "text") {
    return (
      <ThemeProvider theme={theme}>
        <Link to={link} className="button-link">
          <MatButton variant="text" color="primary">
            {label}
          </MatButton>
        </Link>
      </ThemeProvider>
    );
  }
}
