
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './Section.css'
import logo from '../../asserts/decor-brand.png'
const Section = () => {
    return (
        <>
        
            <div className="section" id="section">
            <img src={logo} alt="" style={{margin:"30px 46%"}} />
                <Grid container direction="row">
                    <Grid item lg={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="h3">Bienvenue au
                            <span style={{ color: "#268067", fontWeight: "bold" }}>
                                        <strong > LABORATOIRE </strong><span > LaboBA </span></span>
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid >
                    <Grid item lg={6}>
                        <Grid container direction="column">

                            <Grid item> <Typography variant="h6">L’équipe de laboratoire LaboBA
                            se soucient de votre santé et de celle de votre famille...
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                 . Standard dummy text ever since.</Typography></Grid>
                        </Grid>
                    </Grid>
                    <img src={logo} alt="" style={{margin:"30px 46%"}} />
                    <div id="contact">
                    <Grid>
                    <Typography style={{margin:"90px 0px"}} variant="h3">
                            <span style={{ color: "#268067", fontWeight: "bold" }}>
                                        <strong > </strong><span > Nous Contacter </span></span>
                                </Typography>
                    </Grid>
                    </div>
                </Grid>
            </div>


        </>
    )
}

export default Section
