import React from "react";
import { Box, Typography, Grid, Card, CardContent, Chip } from "@mui/material";
import { styled } from "@mui/system";
import Button from "../../components/button/Button";
import projects from "./config.jsx";

const ProjectPage = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "100px",
  backgroundColor: "#04111E",
  color: "#FFF",
  padding: "150px",
}));

const ProjectCard = styled(Card)(() => ({
  width: "40rem",
  padding: "10px",
  backgroundColor: "#04111E",
  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  textAlign: "left",
  fontSize: "1rem",
  color: "#fff",
  overflow: "hidden",
}));

export default function Projects() {
  return (
    <ProjectPage>
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
        Projects
      </Typography>
      <Grid container spacing={10} columns={2} sx={{ display: "flex", justifyContent: "center" }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={1} key={index}>
            <ProjectCard>
              <CardContent sx={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                  {project.title}
                </Typography>
                <Typography sx={{ marginBottom: "15px" }}>{project.description}</Typography>
                <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "15px" }}>
                  {project.stack?.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      sx={{
                        color: "#4CA6FF",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#3A94D9",
                          color: "#fff",
                          cursor: "pointer",
                        },
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                  <Button label="Code" variant="contained"></Button>
                  <Button label="Demo" variant="contained"></Button>
                </Box>
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectPage>
  );
}
