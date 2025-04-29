import Button from "../button/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./NavList.css";

export default function NavList() {
  return (
    <>
      <List
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ListItem>
          <Button label="ABOUT" link="landing-page" variant="text" />
        </ListItem>
        <ListItem>
          <Button label="SKILLS" link="skills" variant="text" />
        </ListItem>
        <ListItem>
          <Button label="Experience" link="experience" variant="text" />
        </ListItem>
        <ListItem>
          <Button label="PROJECTS" link="projects" variant="text" />
        </ListItem>
        <ListItem>
          <Button label="ACHIEVEMENTS" link="achievements" variant="text" />
        </ListItem>
      </List>
      <Button label="Hire Me" variant="contained" />
    </>
  );
}
