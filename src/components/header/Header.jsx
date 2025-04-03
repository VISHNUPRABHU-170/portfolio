import NavList from "../nav-list/NavList";
import Button from "../button/Button";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <span className="profile">V.</span>
      <NavList />
      <Button label="Hire Me" variant="outlined" />
    </div>
  );
}
