import React from "react";
import { Box, Typography, List, ListItem, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { experience, experienceDetails } from "./config.jsx";

const ExperiencePage = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  backgroundColor: "#04111E",
  color: "#FFF",
}));

const ExperienceCard = styled(Card)(() => ({
  height: "100%",
  width: "25rem",
  boxSizing: "border-box",
  backgroundColor: "#04111E",
  boxShadow: "none",
  borderRadius: "10px",
  fontSize: "1rem",
  color: "#fff",
  cursor: "pointer",
  padding: "5px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const ExperienceDetails = styled(Card)(() => ({
  width: "35rem",
  height: "100%",
  backgroundColor: "#04111E",
  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  color: "#fff",
  fontSize: "1.1rem",
  padding: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
}));

const Header = styled(Typography)(() => ({
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: "bold",
  textDecoration: "underline",
  position: "relative",
  animation: "fadeIn 1s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

export default function Experience() {
  const [activeExperienceCard, setActiveExperienceCard] = React.useState(0);

  return (
    <ExperiencePage>
      <Header variant="h4" component="h1">
        Experience
      </Header>
      <List
        sx={{
          display: "flex",
          gap: "20px",
          height: "30rem",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <ListItem sx={{ height: "100%" }}>
          <List
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {experience.map((project, index) => (
              <ListItem
                key={index}
                onClick={() => setActiveExperienceCard(index)}
                sx={{
                  padding: 0,
                  backgroundColor: activeExperienceCard == index ? "rgba(255, 255, 255, 0.1)" : "none",
                  borderRadius: "10px",
                }}
              >
                <ExperienceCard>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <Typography>
                      <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{project.company}, </span> {project.jobTitle}
                    </Typography>
                    <Typography sx={{ fontStyle: "italic", fontSize: "0.9rem" }}>{project.location}</Typography>
                    <Typography>{project.period}</Typography>
                  </CardContent>
                </ExperienceCard>
              </ListItem>
            ))}
          </List>
        </ListItem>
        <ListItem>
          <ExperienceDetails>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
              Key Highlights
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: 0,
              }}
            >
              {experienceDetails[activeExperienceCard].map((detail, index) => (
                <ListItem key={index}>{detail}</ListItem>
              ))}
            </List>
          </ExperienceDetails>
        </ListItem>
      </List>
    </ExperiencePage>
  );
}
