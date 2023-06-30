import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
        p: 6,
        display: "flex", // Center content horizontally
        justifyContent: "center", // Center content horizontally
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={18} sm={6}>
            <Typography variant="h6" color="#ffff01" gutterBottom>
              Über uns
            </Typography>
            <Typography variant="body2" color="#ffff01">
              Hi, wir sind Entchen Gaming
            </Typography>
          </Grid>
          <Grid item xs={18} sm={6}>
            <Typography variant="h6" color="#ffff01" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="#ffff01">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#ffff01"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#ffff01">
              <Twitter />
            </Link>
          </Grid>
          <Grid item xs={18} sm={6}>
            <Typography variant="h6" color="#ffff01" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="#ffff01">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#ffff01"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#ffff01">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="#ffff01" align="center">
            {"Copyright "}
            <Link color="#ffff01" href="https://your-website.com/">
              Entchen Gaming
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
