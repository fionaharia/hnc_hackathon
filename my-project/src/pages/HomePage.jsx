import React from 'react'
import LeftBar from '../components/LeftBar'
import { RightBar } from '../components/RightBar'
import Box from '@mui/material/Box';

export const HomePage = () => {
  return (
    <>
      <Box sx={{display: 'flex'}}>
        <LeftBar />
        <RightBar />
      </Box>
    </>
  )
}






