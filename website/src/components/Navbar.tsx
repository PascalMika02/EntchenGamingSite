import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
      <AppBar position="static" sx={{ backgroundColor: '#FFFF01' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
            Entchen Gaming
          </Typography>
          <Button color="inherit" href="https://discord.gg/6BX9y22Cqj" target="_blank" rel="noopener noreferrer">
            <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
              Discord
            </Typography>
          </Button>
          <Button color="inherit" href="https://www.tiktok.com/@entchen.gaming" target="_blank" rel="noopener noreferrer">
            <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
              TikTok
            </Typography>
          </Button>
          <Button color="inherit" href="https://www.youtube.com/channel/UC_BF03TG53LJPPn620P6jxA" target="_blank" rel="noopener noreferrer">
            <Typography variant="h6" style={{ flexGrow: 1, color: '#000000' }}>
              WelschDragonYT
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar