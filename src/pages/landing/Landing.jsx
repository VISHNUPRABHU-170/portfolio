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
      <Grid container spacing={15} columns={2}  alignItems="center">
        <Grid item xs={1} md={1}>
          <Box
            component="img"
            src="../../../public/landing-1.svg"
            alt="Profile Picture"
            sx={{
              width: "100%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid>
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
