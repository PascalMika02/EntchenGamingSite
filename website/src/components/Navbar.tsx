import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
      <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#FFFF01' }}>
            Entchen Gaming
          </Typography>
          <Button color="inherit" href="https://discord.gg/6BX9y22Cqj" target="_blank" rel="noopener noreferrer">
            <Typography variant="h6" style={{ flexGrow: 1, color: '#FFFF01' }}>
              Discord
            </Typography>
          </Button>
          <Button color="inherit" href="https://www.tiktok.com/@entchen.gaming" target="_blank" rel="noopener noreferrer">
            <Typography variant="h6" style={{ flexGrow: 1, color: '#FFFF01' }}>
              TikTok
            </Typography>
          </Button>
          <Button color="inherit" href="https://www.youtube.com/channel/UC_BF03TG53LJPPn620P6jxA" target="_blank" rel="noopener noreferrer">
            <Typography variant="h6" style={{ flexGrow: 1, color: '#FFFF01' }}>
              WelschDragonYT
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar