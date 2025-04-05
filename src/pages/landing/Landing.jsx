import React from "react";
import { Typography, Box, Link, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ProfileImage from "../../../public/landing-1.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import MediumIcon from "@mui/icons-material/Description"; // You can customize this icon for Medium

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
      <Grid container spacing={15} columns={2} alignItems="center">
        <Grid item xs={1} md={1}>
          <Box
            component="img"
            src={ProfileImage}
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
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", marginTop: 2 }}>
            <IconButton href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:vishnurr1708@gmail.com" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
              <EmailIcon />
            </IconButton>
            <IconButton href="https://medium.com/@your-medium-username" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
              <MediumIcon />
            </IconButton>
          </Box>
          <Link
            href="#"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginTop: "20px", display: "inline-block", color: "#4CA6FF" }}
          >
            View My Resume
          </Link>
        </Grid>
      </Grid>
    </LandingPage>
  );
}
