import MatButton from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ label, link, variant }) {
  if (variant === "outlined") {
    return (
      <Link to={link} className="button-link">
        <MatButton variant="outlined" color="primary">
          {label}
        </MatButton>
      </Link>
    );
  } else if (variant === "contained") {
    return (
      <Link to={link} className="button-link">
        <MatButton variant="contained" color="primary">
          {label}
        </MatButton>
      </Link>
    );
  } else if (variant === "text") {
    return (
      <Link to={link} className="button-link">
        <MatButton variant="text" color="primary">
          {label}
        </MatButton>
      </Link>
    );
  }
}
