import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import skills from "./config.jsx";

const SkillsPage = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "100px",
  backgroundColor: "#04111E",
  color: "#FFF",
  padding: "150px",
}));

const SkillCard = styled(Card)(() => ({
  width: "9.5rem",
  height: "9rem",
  backgroundColor: "#04111E",
  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  fontSize: "1rem",
  color: "#fff",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
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
      <Grid container spacing={{ xs: 2, sm: 4, md: 12 }} columns={12} sx={{ display: "flex", justifyContent: "center" }}>
        {skills.map((skill, index) => (
          <Grid xs={12} sm={4} md={2} key={index}>
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
