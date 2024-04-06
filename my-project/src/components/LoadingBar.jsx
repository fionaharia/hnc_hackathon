import * as React from 'react';
import { LinearProgress, Typography, Box, IconButton } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

const LoadingBar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton sx={{ marginRight: '10px' }}>
        <BoltIcon />
      </IconButton>
      <Typography variant="body2" color="textSecondary">
        Daily Quests
      </Typography>
      <Box sx={{ width: '100%', marginLeft: 'auto' }}>
        <LinearProgress variant="determinate" value={0} />
      </Box>
      <Typography variant="body2" color="textSecondary">
        Earn 10 XP
      </Typography>
      <Typography variant="body2" color="textSecondary">
        0/10
      </Typography>
    </Box>
  );
};

export default LoadingBar;
