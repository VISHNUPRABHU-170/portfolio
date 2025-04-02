import Link from "../link/Link";
import "./NavList.css";

export default function NavList() {
  return (
    <ul className="nav-list">
      <li>
        <Link label="PORTFOLIO" link="" className="nav-link" />
      </li>
      <li>
        <Link label="SKILLS" link="skills" className="nav-link" />
      </li>
      <li>
        <Link label="PROJECTS" link="projects" className="nav-link" />
      </li>
      <li>
        <Link label="ACHIEVEMENTS" className="nav-link" />
      </li>
    </ul>
  );
}
