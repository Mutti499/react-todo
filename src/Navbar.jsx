import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar(){
    return(
    <AppBar position="static">
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
                Basic Todo with React!
            </Typography>
        </Toolbar>
    </AppBar>
    )
}