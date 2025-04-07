import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/system";

const AchievementPage = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFF",
}));

const AchievementCard = styled(Card)(() => ({
  width: "40rem",
  height: "35rem",
  backgroundColor: "#04111E",
  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  transition: "all 0.5s",
}));

export default function Achievements() {

  const achievements = ["/javascript-basic.jpg", "/java-basic.jpg", "problem-solving.png", "/sql.png", "/java-udemy.png"];

  return (
    <AchievementPage>
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
        Achievements
      </Typography>
      <Box>
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: `repeat(${achievements.length}, 40rem)`,
            gap: "4vw",
            paddingBottom: `calc(${achievements.length} * 1.5em)`,
            marginBottom: "4vw",
          }}
        >
          {achievements.map((achievement, index) => (
            <Grid
              item
              key={index}
              sx={{
                position: "sticky",
                top: "0",
                paddingTop: "8.5em",
              }}
            >
              <AchievementCard>
                <CardContent>
                  <Box
                    component="img"
                    src={achievement}
                    alt="Profile Picture"
                    sx={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </CardContent>
              </AchievementCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AchievementPage>
  );
}
