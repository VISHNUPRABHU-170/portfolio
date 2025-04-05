import MatButton from "@mui/material/Button";

export default function Button({ label, variant }) {
  if (variant === "outlined") {
    return (
      <MatButton variant="outlined" color="primary">
        {label}
      </MatButton>
    );
  } else if (variant === "contained") {
    return (
      <MatButton
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#4CA6FF",
        }}
      >
        {label}
      </MatButton>
    );
  } else if (variant === "text") {
    return (
      <MatButton
        variant="text"
        color="primary"
        sx={{
          color: "#4CA6FF",
        }}
      >
        {label}
      </MatButton>
    );
  }
}
