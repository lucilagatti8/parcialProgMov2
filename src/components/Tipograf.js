import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ImagenGitHub from '../assets/img/Octocat.jpg'

const Tipograf = () => {
  return (
    <Box component='seccion0' >
    <Box sx={{display:'flex',justifyContent:'center'}}>
        <Box>
        <picture>
            <img src={ImagenGitHub} alt='octocat'/>
        </picture>
        </Box>
        <Box component='seccion1' >
        
                <Typography variant='h3'>Octocat</Typography>
                <Typography variant='h6'>@Octocat</Typography>
                <Typography variant='h6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</Typography>
                <Paper>
                    <Typography>Repositorios Seguidores Me gusta</Typography>
                </Paper>
        
        </Box>
    </Box>
    </Box>
  )
}

export default Tipograf