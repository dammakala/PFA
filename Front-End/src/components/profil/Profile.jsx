import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Button, CardContent, Card, CardActions,Paper,Table,TableCell,TableBody,TableContainer ,TableHead,TableRow  } from '@material-ui/core'
import { ThumbUp, Notifications, Drafts,AccountBox ,LocationOn,DateRange,Phone,LocalHospital,PictureAsPdf } from '@material-ui/icons'
import logo from '../../asserts/decor-brand.png'
const styles = theme => ({
    Rtitle: {
        fontSize: "32px",
        textAlign: "center",
        textTransform: " uppercase",
        fontStyle: "normal",
        fontWeight: "bold",
        position: "relative",
        borderBottom: "none",
        color: " #00927b",
        marginBottom: "15px",


    },
    icons: {

        margin: "0px 20%",
        color: "#00927b"
    },
    card:{
        backgroundColor:"#00927b2e"
    }

})
class Profile extends Component {

    state = {
        user: "",
        analyse: [],
        error: ""
    }
  
    componentDidMount() {

        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (user) {
           
            this.setState({ analyse: user.analyse })
            this.setState({ user: user })
        }
        else {
            this.setState({ error: "You don't have permission to be in this page" })
        }
console.log(user)
    }
    render() {

        const { classes } = this.props;
        const { user, analyse, error } = this.state
        return (
            <>

                <Container maxWidth="md" >

                    <div style={{ marginTop: "25px" }}>
                        <Typography variant="subtitle1" > S’ENGAGER POUR VOTRE SANTÉ EST NOTRE RESPONSABILITÉ
                            </Typography>
                    </div>



                    <img src={logo} alt="" style={{ margin: "30px 46%" }} />
                            <Typography variant="h6" className={classes.Rtitle}>vos résultats</Typography>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"

                    >

                        <Grid item lg={4}  >
                            <Drafts className={classes.icons} />
                            <Typography variant="subtitle2">  <br /> Transmettez votre adresse email<br />
                                    au laboratoire puis activez votre <br />
                                    compte en quelques clics.</Typography> </Grid>
                        <Grid item lg={4}>
                            <Notifications className={classes.icons} />
                            <Typography variant="subtitle2"> <br /> Soyez alerté par
                                     email lorsque <br />
                                    vos résultats sont disponibles.</Typography> </Grid>


                        <Grid item lg={4}  >
                            <ThumbUp className={classes.icons} />
                            <Typography variant="subtitle2">  <br /> C’est simple, sécurisé
                                    et écologique.</Typography> </Grid>

                    </Grid>
                    <img src={logo} alt="" style={{ margin: "60px 46%" }} />
      <Grid container >
                        <Grid item lg={6}>
                            <Card className={classes.card}>

                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" variant="h4" >
                                         Carte Patient
        </Typography>
                                    <Typography variant="h6" component="h2">
                                    <AccountBox/>  (Mr/Mme): {user.nom} {user.prenom}
        </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                     <DateRange/>   Date de naissance:  {user.datenaissance}
        </Typography>
                                    <Typography variant="body2" component="p">
                                       <LocationOn/> Adresse: {user.addresse}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                     <Phone/>   téléphone:  {user.telephone}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
                                     <LocalHospital/>   Numbre des analyses disponibles:   {analyse.length}
        </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button  color="primary">Modifier mes coordonnées</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item lg={6}>
                        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Liste des analyse</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Date d'analyse</TableCell>
            <TableCell align="right">Téléchargez</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {analyse.map((row) => (
            <TableRow key={row.id_r}>
              <TableCell component="th" scope="row">
                {row.titre}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><Button color="secondary"><PictureAsPdf/> Imprimer</Button> </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                        </Grid>
                    </Grid>
                    <Typography variant="h6" className={classes.Rtitle}>Le catalogue des analyses</Typography>
                   
                </Container>
            </>
        )
    }
}
export default withStyles(styles)(Profile);