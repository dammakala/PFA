import React from 'react';
import  {useState} from 'react'

import { Link ,useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Menu,MenuItem} from '@material-ui/core'
import {LocalHospital} from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    alignItems: "center"
  },
  nav:{
    backgroundColor:"#268067"
  },
  
  title: {
    flexGrow: 1,
    color:"aliceblue",
    fontSize:" 2rem"
  },
  btnLogout:{
    display:"none"
},
bb:{
    
},
menu:{
  top:"50px!important"
},
notificationBanner:{
  backgroundColor:" #ED6A5B",
    color: "white",
    height: "30px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    overflow: "hidden",
    cursor: "pointer",
},
bannerInfo:{
  paddingLeft: "100vw",
    display: "inline-block",
    whiteSpace: "nowrap",
    paddingBottom: "0",
    boxSizing: "content-box",
    animation: "moving 30s infinite linear",
    fontSize: "1rem",
}
}));



export default function ButtonAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [anchorEl, setAnchorEl] = useState()

const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
}

let closeMenu = () => {
    setMenuOpen(false);
}
    const classes = useStyles()
    const history = useHistory()
    const [btn , setBtn] = useState(false)
    const pathname = window.location.pathname
    function refreshPage()  {
      if(pathname==="/login")
      window.location.reload(false);
    }
          
     function handleLogout(){
        localStorage.clear()
        history.push('/')
        setBtn(true) 
      }
 

  return (
    <div className={classes.root}>
     
      <AppBar position="static" className={classes.nav} > 
        <Toolbar variant="dense" >
          
            
          <Typography component={Link} to ='/' variant="h6" className={classes.title}>
          <LocalHospital /> LaboBA
          </Typography>
          <Button color="inherit"  component={Link} to={"/"}  onClick={recordButtonPosition}>
          Conseils pratiques
          </Button>
          <Menu
              
              className={classes.menu}
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={closeMenu}>  
              <MenuItem  component={Link} to={"/conseils/"} onClick={closeMenu}>  Préparer votre venue au laboratoire  </MenuItem> 
              <MenuItem component={Link} to={"/conseils"} onClick={closeMenu}>   Accueil au secrétariat   </MenuItem> 
              <MenuItem component={Link} to={"/conseils"} onClick={closeMenu}>   Recommandations avant le prélèvement sanguin   </MenuItem> 
              <MenuItem component={Link} to={"/conseils"} onClick={closeMenu}>   Comment se déroule votre prélèvement au laboratoire </MenuItem> 
              <MenuItem component={Link} to={"/conseils"} onClick={closeMenu}>   Prélèvements chez les enfants </MenuItem> 
              <MenuItem component={Link} to={"/conseils"} onClick={closeMenu}>    Prélèvements à domicile    </MenuItem> 
              <MenuItem component={Link} to={"/conseils"} onClick={closeMenu}>   Prélèvements microbiologiques </MenuItem> 
              <MenuItem  component={Link} to={"/conseils"} onClick={closeMenu}>    Prélèvements urinaires  </MenuItem> 
             </Menu>
         
          <Button color="inherit"  component={Link} to={localStorage.getItem("currentUser") === null? "/loginpro" : "/pro" } className={(localStorage.getItem("typeUser") === 'patient')  ? `${classes.btnLogout}` :`${classes.bb}`} >Espace professionel</Button>
          <Button color="inherit"  component={Link} to={localStorage.getItem("currentUser") === null? "/login" : "/profile" } className={(localStorage.getItem("typeUser") === 'medecin')  ? `${classes.btnLogout}` :`${classes.bb}`}>Espace patient</Button>
          <Button href="#contact" color="inherit" > Contact</Button>
          <Button className={(localStorage.getItem("currentUser") === null || btn==true)  ? `${classes.btnLogout}` :`${classes.bb}`} variant="outlined" onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}