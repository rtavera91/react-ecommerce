import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const handleFacebookClick = () => {};

  const handleTwitterClick = () => {};

  const handleInstagramClick = () => {};

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <IconButton
        onClick={handleFacebookClick}
        sx={{ color: "white" }}
        aria-label="Facebook"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        onClick={handleTwitterClick}
        sx={{ color: "white" }}
        aria-label="Twitter"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        onClick={handleInstagramClick}
        sx={{ color: "white" }}
        aria-label="Instagram"
      >
        <InstagramIcon />
      </IconButton>
      <Typography variant="body2" sx={{ color: "white", marginTop: "10px" }}>
        Todos los derechos reservados &copy; 2023
      </Typography>
    </Box>
  );
};

export default Footer;
