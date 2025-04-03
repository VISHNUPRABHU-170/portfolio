import Button from "../button/Button";
import "./NavList.css";

export default function NavList() {
  return (
    <ul className="nav-list">
      <li>
        <Button label="PORTFOLIO" link="" variant="text" />
      </li>
      <li>
        <Button label="SKILLS" link="skills" variant="text" />
      </li>
      <li>
        <Button label="PROJECTS" link="projects" variant="text" />
      </li>
      <li>
        <Button label="ACHIEVEMENTS" variant="text" />
      </li>
    </ul>
  );
}
