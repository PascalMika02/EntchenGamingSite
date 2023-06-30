import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { FaDiscord } from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

 // Assuming you have a logo image file named 'logo.png' in the same directory

function Navbar() {
  return (
    <AppBar position="sticky" sx={{  backgroundColor: '#FFFF01', borderRadius: '20px' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
          Entchen Gaming
        </Typography>
        
        <Button color="inherit" href="https://discord.gg/6BX9y22Cqj" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ style: { marginRight: '5px', fontSize: '24px', color: '#000000' } }}>
            <FaDiscord />
          </IconContext.Provider>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
            Discord
          </Typography>
        </Button>
        <Button color="inherit" href="https://www.tiktok.com/@entchen.gaming" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} style={{ marginRight: '5px', fontSize: '24px', color: '#000000' }} />
          <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
            TikTok
          </Typography>
        </Button>
        <Button color="inherit" href="https://www.youtube.com/channel/UCDMCthbfVvjj_scXYo7NlEg" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ style: { marginRight: '5px', fontSize: '24px', color: '#000000' } }}>
            <TiSocialYoutube />
          </IconContext.Provider>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
            Youtube
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
