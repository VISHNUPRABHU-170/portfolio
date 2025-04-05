import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import skills from "./config.jsx";

const SkillsPage = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  justifyContent: "center",
  backgroundColor: "#04111E",
  color: "#FFF",
  padding: "150px",
}));

const SkillCard = styled(Card)(() => ({
  width: "9.5rem",
  height: "9rem",
  backgroundColor: "#fff",
  borderRadius: "10px",
  fontSize: "1rem",
  color: "#04111E",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#4CA6FF",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    color: "#fff",
  },
}));

export default function Skills() {
  return (
    <SkillsPage>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Tech Stack
      </Typography>
      <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 1, sm: 1, md: 6 }}>
        {skills.map((skill, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 1 }}>
            <SkillCard>
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <Avatar
                  src={skill.skillIcon}
                  alt={skill.label}
                  sx={{
                    width: 70,
                    height: 70,
                  }}
                />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {skill.label}
                </Typography>
              </CardContent>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </SkillsPage>
  );
}
