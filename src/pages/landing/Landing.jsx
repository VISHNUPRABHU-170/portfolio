import React from "react";
import { Typography, Box, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";

const LandingPage = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#04111E",
  color: "#FFF",
  padding: "150px",
}));

export default function Landing() {
  return (
    <LandingPage>
      <Grid container spacing={5} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            Hello, I'm <span style={{ color: "#4CA6FF" }}>Vishnuprabhu</span>
          </Typography>
          <Typography variant="h5" component="h2" sx={{ marginBottom: 3 }}>
            Full Stack Developer | Passionate About Coding
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            I specialize in building modern, user-friendly web applications. With a keen eye for design and code, I craft solutions that
            stand out.
          </Typography>
          <Link href="#" style={{cursor: "pointer"}}>View My Resume</Link>
        </Grid>
      </Grid>
    </LandingPage>
  );
}
