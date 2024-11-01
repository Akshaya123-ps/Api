import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const Navbar = () => {
   
  return (
    <div>
       <AppBar sx={{
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
       }}>
        <Toolbar>
            <div id='app'>
            <Typography variant='h6' >My_api</Typography>&nbsp;
            </div>
            <Link to='/t1'><Button variant='contained' color='blue'>Api user</Button></Link>&nbsp;
            <Link to='/t2'><Button variant='contained' color='blue'>Api user1</Button></Link>&nbsp;
            <Link to='/t3'><Button variant='contained'color="blue">List_Map</Button>
            </Link>
        </Toolbar>
        </AppBar> 
    </div>
  )
}

export default Navbar