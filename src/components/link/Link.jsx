import { Link as RouterLink } from "react-router-dom";
import "./Link.css";

export default function Link({ label, link, className }) {
  return (
    <RouterLink to={link} className={`link ${className}`}>
      {label}
    </RouterLink>
  );
}
