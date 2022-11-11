import React from 'react'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, InputBase} from '@mui/material'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,

    marginRight: theme.spacing(5),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  }));

const BarraBusqueda = () => {
  return (
    <Box>
        <AppBar sx={{backgroundColor:'#b0bec5'}}>
            <Toolbar sx={{display:'flex', justifyContent:'center'}}>
                <Search sx={{display:'flex'}}>

                <SearchIcon/>
                    <InputBase placeholder='Usuario de GitHub'>
                    
                    </InputBase>

                </Search>
            </Toolbar>
        </AppBar>

    </Box>
  )
}

export default BarraBusqueda