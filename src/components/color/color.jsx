import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export default function TransitionsPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  let colors=[];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
      <ColorLensIcon />
      </button>
      
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                {/* create div to show list */}
                <div>
                    
                </div>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}