import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Copyright from '../Copyright'

function Footer() {
  return (
  <Box sx = {{ bgcolor: 'background.paper', p: 6 }} component = "footer" >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
    </Box >
  )
}

export default Footer