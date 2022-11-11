import React from 'react';
import Busqueda from '../components/Busqueda';
import Tipograf from '../components/Tipograf';
import Contactos from '../components/Contactos';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';

const Inicio = () => {
  return (
    <Box sx={{}}>
        <Busqueda/>
        <Toolbar/>
        <Tipograf/>
        <Toolbar/>
        <Contactos/>

    </Box>
  )
}

export default Inicio