import { AppBar, Toolbar, Button, IconButton, Icon } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function BSVGNavBar() {

  return (
    <div>
    <AppBar position='static'>
        <Toolbar style={{display: 'flex', justifyContent:'space-between'}}>
          <div>
            <div style={{width: '40px', height: '40px', backgroundColor: '#FFFF' }}/>
          </div>
          <div>
            <Button>About Us</Button>
            <Button>Grain Ingredients</Button>
            <Button>Feed Ingredients</Button>
            <Button>Transloading</Button>
            <Button>Contact Us</Button>
          </div>
          <div>
            <IconButton> <InstagramIcon /> </IconButton>
            <IconButton> <LinkedInIcon/> </IconButton>
          </div>
        </Toolbar>
    </AppBar>
    </div>

  )
}

export default BSVGNavBar;