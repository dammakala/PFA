import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Section from '../section/Section'

import './Home.css'
const useStyles = makeStyles(() => ({
    btn: {
      backgroundColor:"#268067"
    },
    bgImg:{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        
    },
    home: {
    
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
  },
  title:{
    textAlign: "center",
    color: "white",
    position: "relative",
    marginTop: "190px",
    
   
    fontSize: "5.263rem",
    lineHeight: "1.22",
    fontSize: "5.8823vw",
    fontFamily: '"Poppins-Bold",sans-serif',
     fontWeight: "700",
},
p:{
    fontSize: "18px  !important",
    color: "#fff",
}


}))

const Home = () => {
    const classes = useStyles()
    return (
        <>
       
     
        <div className={classes.bgImg} style={{backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33) ),url('/01_img.jpg')"}}>
       
           
           <div className={classes.home} >
            
                <h1 className={classes.title}>Health & Medical Center</h1>
                <p className={classes.p}>We care for you health. So, 99% of our clients recommend us.</p>
              <a href="#section"> <Button  className={classes.btn} variant="contained" color='secondary' size='medium'>à propos de nous</Button> </a>
        </div>
              
            
        </div> 

        <Section></Section>
      
        </>
        
    )
}

export default Home
