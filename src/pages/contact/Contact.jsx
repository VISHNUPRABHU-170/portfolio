import React from "react";
import { Box, Typography, Grid, TextField, Button, Link } from "@mui/material";
import { styled } from "@mui/system";

const ContactPage = styled(Box)(() => ({
  backgroundColor: "#04111E",
  color: "#FFF",
  padding: "100px",
  textAlign: "center",
}));

const ContactForm = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  marginTop: "50px",
}));

const SocialLinks = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  justifyContent: "center",
}));

export default function Contact() {
  return (
    <ContactPage>
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Get in Touch
      </Typography>
      <Typography variant="body1" sx={{ color: "#AAB7C4", marginBottom: "50px" }}>
        Whether you'd like to collaborate or just say hello, feel free to reach out!
      </Typography>

      <Grid container justifyContent="center" spacing={4}>
        {/* Contact Details */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#4CA6FF" }}>
            Contact Details
          </Typography>
          <Typography sx={{ color: "#AAB7C4", marginBottom: "10px" }}>
            Email:{" "}
            <Link href="mailto:your-email@gmail.com" sx={{ color: "#4CA6FF" }}>
              your-email@gmail.com
            </Link>
          </Typography>
          <Typography sx={{ color: "#AAB7C4", marginBottom: "10px" }}>
            Phone:{" "}
            <Link href="tel:+1234567890" sx={{ color: "#4CA6FF" }}>
              +1 234 567 890
            </Link>
          </Typography>
          <Typography sx={{ color: "#AAB7C4" }}>Location: Coimbatore, India</Typography>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} sm={6} md={4}>
          <ContactForm>
            <TextField
              variant="outlined"
              label="Your Name"
              fullWidth
              InputProps={{
                sx: { color: "#FFF", borderColor: "#4CA6FF" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  color: "#FFF",
                },
                "& .MuiInputLabel-root": {
                  color: "#AAB7C4",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4CA6FF",
                },
              }}
            />
            <TextField
              variant="outlined"
              label="Your Email"
              fullWidth
              InputProps={{
                sx: { color: "#FFF", borderColor: "#4CA6FF" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  color: "#FFF",
                },
                "& .MuiInputLabel-root": {
                  color: "#AAB7C4",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4CA6FF",
                },
              }}
            />
            <TextField
              variant="outlined"
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              InputProps={{
                sx: { color: "#FFF", borderColor: "#4CA6FF" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  color: "#FFF",
                },
                "& .MuiInputLabel-root": {
                  color: "#AAB7C4",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#4CA6FF",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4CA6FF",
                "&:hover": { backgroundColor: "#3A94D9" },
              }}
            >
              Submit
            </Button>
          </ContactForm>
        </Grid>
      </Grid>

      {/* Social Media Links */}
      <SocialLinks>
        <Link href="https://github.com/your-github-username" target="_blank" sx={{ color: "#4CA6FF", fontWeight: "bold" }}>
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/your-linkedin-username" target="_blank" sx={{ color: "#4CA6FF", fontWeight: "bold" }}>
          LinkedIn
        </Link>
        <Link href="https://leetcode.com/your-leetcode-username" target="_blank" sx={{ color: "#4CA6FF", fontWeight: "bold" }}>
          LeetCode
        </Link>
      </SocialLinks>
    </ContactPage>
  );
}
