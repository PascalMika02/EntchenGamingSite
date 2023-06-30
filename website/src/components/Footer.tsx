import React from 'react';
import { Typography, Link, Grid, Container } from '@mui/material';

const footerStyles = {
  padding: '16px',
  marginTop: 'auto',
  backgroundColor: '#f5f5f5',
};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <Container maxWidth="md">
        <Grid >
          <Grid item>
            <Typography variant="body1">© 2023 Entchen Gaming</Typography>
          </Grid>
          <Grid item>
            <Link href="#" variant="body1">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body1">
              Terms of Service
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
